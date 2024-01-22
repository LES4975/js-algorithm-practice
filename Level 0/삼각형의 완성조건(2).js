function solution(sides) {
  let longest;
  longest = Math.max(sides[0], sides[1]);
  //case 1 : 가장 긴 게 이미 sides에 있는 경우.
  let case1 = Math.min(sides[0], sides[1]);
  //case 2 : sides의 원소보다 더 긴 변이 주어지지 않았을 경우.
  let case2 = sides[0] + sides[1] - longest - 1;
  //   console.log(case1 + case2);
  return case1 + case2;
}

solution([1, 2]);
solution([3, 6]);
solution([11, 7]);
/*
문제 설명
선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.

가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
삼각형의 두 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다. 나머지 한 변이 될 수 있는 정수의 개수를 return하도록 solution 함수를 완성해주세요.

제한사항
sides의 원소는 자연수입니다.
sides의 길이는 2입니다.
1 ≤ sides의 원소 ≤ 1,000
입출력 예
sides	result
[1, 2]	1
[3, 6]	5
[11, 7]	13
*/
