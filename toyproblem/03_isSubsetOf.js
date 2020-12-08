//
// isSubsetOf
// 문제
// 두 개의 배열(base, sample)을 입력받아 sample이 base의 부분집합인지 여부를 리턴해야 합니다.
//     입력
// 인자 1 : base
// number 타입을 요소로 갖는 임의의 배열 (base.length <= 100 )
// 인자 1 : sample
// number 타입을 요소로 갖는 임의의 배열 (sample.length <= 100 )
// 출력
// boolean 타입을 리턴해야 합니다.
//     주의사항
// base, sample 내에 중복되는 요소는 없다고 가정합니다.
//     입출력 예시
// let base = [1, 2, 3, 4, 5];
// let sample = [1, 3];
// let output = isSubsetOf(base, sample);
// console.log(output); // --> true
//
// sample = [6, 7];
// output = isSubsetOf(base, sample);
// console.log(output); // --> false
//
// base = [10, 99, 123, 7];
// sample = [11, 100, 99, 123];
// output = isSubsetOf(base, sample);
// console.log(output); // --> false
// Advanced
// 시간 복잡도를 개선하여, Advanced 테스트 케이스(base, sample의 길이가 70,000 이상)를 통과해 보세요.

const isSubsetOf = function(base, sample) {
  base.sort((a, b) => a - b);
  sample.sort((a, b) => a - b);
  let count = 0;
  if (sample[sample.length - 1] > base[base.length - 1]) return false;
  // 샘플의 마지막 값이 base의 마지막 값보다 크다는 것은 더 이상 같지 않음으로 Return false
  for (let i = 0; i < sample.length; i++) {
    for (let j = count; j < base.length; j++) {
      if (sample[i] === base[j]) {
        count = j + 1;
        // 값이 같을 경우, base를 굳이 처음부터 돌 필요가 없기 때문에
        break;
      } else if (sample[i] < base[j + 1]) return false;
      // 셈플의 값이 base값보다 크고 윗 if문에서 같지 않다라고 알게 되었고, 샘플 값이
      // 베이스 다음값보다 작다는 것은 더 이상 맞을 가능성이 없다
      // sort를 썼기 때문에
    }
  }
  return true;
};
