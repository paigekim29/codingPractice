// rockPaperScissors
// 문제
// 가위바위보 게임은 2인 이상의 사람이 동시에 '가위, 바위, 보'를 외치고 동시에 가위, 바위 또는 보 중에서 한 가지를 의미하는 손 모양을 내밀어 승부를 결정짓는 게임이다. 세 판의 가위바위보 게임을 할 경우, 한 사람은 세 번의 선택(예. 가위, 가위, 보)을 할 수 있습니다. 세 번의 선택으로 가능한 모든 경우의 수를 구하는 함수를 작성합니다.
//
//     입력
// 없음
//
// 출력
// 2차원 배열(arr[i])을 리턴해야 합니다.
//     arr[i]는 전체 경우의 수 중 한 가지 경우(총 세 번의 선택)를 의미하는 배열입니다.
//     arr[i]는 'rock', 'paper', 'scissors' 중 한 가지 이상을 요소로 갖는 배열입니다.
//     arr[i].length는 3입니다.
//
//     주의사항
// 최종적으로 리턴되는 배열의 순서는 가중치 적용 정렬(Weighted Sort)을 따릅니다.
//     중요도는 'rock', 'paper', 'scissors' 순으로 높습니다.
//     쉽게 생각해 올림픽 순위 결정 방식을 참고하면 됩니다.
//     금메달('rock')이 은메달('paper')보다 우선하고, 은메달('paper')이 동메달('scissors')보다 우선합니다.
//
//     입출력 예시
// let output = rockPaperScissors();
// console.log(output);
// /*
//     [
//       ["rock", "rock", "rock"],
//       ["rock", "rock", "paper"],
//       ["rock", "rock", "scissors"],
//       ["rock", "paper", "rock"],
//       // ...etc ...
//     ]
//   */
// Advanced
// 가위바위보 게임의 수를 나타내는 양의 정수 rounds가 주어질 경우, 해당 rounds 동안 선택할 수 있는 모든 경우의 수를 리턴하도록 함수를 작성해 보세요.
//
//     let output = rockPaperScissors(5);
// console.log(output);
// /*
//     [
//       ["rock", "rock", "rock", "rock", "rock"],
//       ["rock", "rock", , "rock", "rock", "paper"],
//       ["rock", "rock", , "rock", "rock", "scissors"],
//       ["rock", "rock", "rock", "paper", "rock"],
//       ["rock", "rock", "rock", "paper", "paper"],
//       ["rock", "rock", "rock", "paper", "scissors"],
//       ["rock", "rock", "rock", "scissors", "rock"],
//       // ...etc ...
//     ]
//   */

// const rockPaperScissors = function(n) {
//   let result = [];
//   let rps = [['rock'], ['paper'], ['scissors']];
//   if (n === undefined) n = 3;
//   // n이 없을 때 처리해줘야 됨
//   if (n === 1) return [['rock'], ['paper'], ['scissors']];
//
//   let prev = rockPaperScissors(n - 1);
//
//   for (let i = 0; i < rps.length; i++) {
//     for (let j = 0; j < prev.length; j++) {
//       result.push([...rps[i], ...prev[j]]);
//     }
//   }
//   return result;
// };



// n=1
// [ [rock],
//  [paper],
//  [scissor]]
//
// n=2
// [ [rock, rock],
//  [rock, paper]
//  [rock, scissor],
//  [paper, rock],
//  [paper, paper]
//  [paper, scissor],
//  [scissor, rock],
//  [scissor, paper],
//  [scissor, scissor]]

// n=3
// [[rock, rock, rock],
// [rock, rock, paper],
// [rock, rock, scissor],
// [rock,paper, rock],
// [rock, paper, paper],
// [rock, paper, scissor],
// [rock, scissor, rock],
// [rock, scissor, paper],
// [rock, scissor, scissor], ...]

// 결과적으로 배열 i의 첫번째 값은 항상 rock, paper, scisoor로 고정되지만
// 그 뒤로는 n-1의 값이 붙여지는 것을 볼 수 있다
// 재귀로 풀 때, n=1이며 [['rock'],['paper'],['scissor']]로 탈출문으로 만들기
// result라는 빈배열에 for loop을 돌면서 넣어주기
// 바깥 for loop은 [['rock'],['paper'],['scissor']]
// 안쪽 for loop은 rockPaperScissors(n-1)일 때가 좋을듯
// result에 넣을 때, 한 번 배열로 감싸준다
// n이 없다 가정하면 그거는 3으로 설정 => 문제에서 3판의 가위바위보를 할 경우라고 명시가 되어있기에...



const rockPaperScissors = function (rounds) {
  rounds = rounds || 3;
  const rps = ['rock', 'paper', 'scissors'];

  const outcomes = [];
  let permutate = function (roundsToGo, playedSoFar) {
    if (roundsToGo === 0) {
      outcomes.push(playedSoFar);
      return;
      // return을 하면 그 전 상태를 넘겨줌
    }

    for (let i = 0; i < rps.length; i++) {
      let currentPlay = rps[i];
      permutate(roundsToGo - 1, playedSoFar.concat(currentPlay));
    }
  };

  permutate(rounds, []);

  return outcomes;
};

console.log(rockPaperScissors(4))