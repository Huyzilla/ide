// Thêm bài mới vào mảng này.
// Mỗi bài cần id duy nhất, samples và ít nhất 3 tests.

export default [
  {
    id: 'day2-01',
    day: 2,
    title: 'Duyệt Vector bằng Iterator',

    description:
      'Cho một vector gồm n số nguyên. Hãy duyệt vector bằng iterator và in các phần tử theo đúng thứ tự ban đầu. Không dùng a[i] để truy cập phần tử khi in.',

    inputDescription:
      'Dòng 1: số nguyên n. Dòng 2: n số nguyên của vector.',

    outputDescription:
      'In n phần tử theo đúng thứ tự ban đầu, cách nhau bởi dấu cách. Nếu vector rỗng, in một dòng trống.',

    constraints:
      '0 ≤ n ≤ 100000; |aᵢ| ≤ 10⁹.',

    samples: [
      {
        input: '5\n1 2 3 4 5',
        output: '1 2 3 4 5'
      }
    ],

    tests: [
      {
        input: '5\n1 2 3 4 5',
        output: '1 2 3 4 5'
      },
      {
        input: '4\n-5 0 8 -2',
        output: '-5 0 8 -2'
      },
      {
        input: '1\n100',
        output: '100'
      },
      {
        input: '0',
        output: ''
      }
    ]
  },

  {
    id: 'day2-02',
    day: 2,
    title: 'Xóa các số âm',

    description:
      'Cho một vector gồm n số nguyên. Hãy xóa tất cả các phần tử âm khỏi vector. Nên thực hiện bằng iterator và erase(). Chú ý sau khi erase(), iterator có thể thay đổi.',

    inputDescription:
      'Dòng 1: số nguyên n. Dòng 2: n số nguyên.',

    outputDescription:
      'In vector sau khi xóa tất cả số âm, các phần tử cách nhau bởi dấu cách. Nếu vector rỗng, in một dòng trống.',

    constraints:
      '0 ≤ n ≤ 100000; |aᵢ| ≤ 10⁹.',

    samples: [
      {
        input: '6\n1 -2 3 -4 5 -6',
        output: '1 3 5'
      }
    ],

    tests: [
      {
        input: '6\n1 -2 3 -4 5 -6',
        output: '1 3 5'
      },
      {
        input: '7\n-1 -2 0 4 -5 -6 8',
        output: '0 4 8'
      },
      {
        input: '4\n-1 -2 -3 -4',
        output: ''
      },
      {
        input: '5\n0 1 2 3 4',
        output: '0 1 2 3 4'
      }
    ]
  },

  {
    id: 'day2-03',
    day: 2,
    title: 'Sửa phần tử bằng Tham chiếu',

    description:
      'Cho vector gồm n số nguyên và một số X. Hãy cộng X vào từng phần tử của vector rồi in vector mới. Khi dùng range-based for, hãy dùng tham chiếu (int &x) để sửa trực tiếp phần tử trong vector.',

    inputDescription:
      'Dòng 1: n và X. Dòng 2: n số nguyên.',

    outputDescription:
      'In vector sau khi mỗi phần tử được cộng thêm X, các phần tử cách nhau bởi dấu cách.',

    constraints:
      '0 ≤ n ≤ 100000; |aᵢ|, |X| ≤ 10⁹.',

    samples: [
      {
        input: '5 10\n1 2 3 4 5',
        output: '11 12 13 14 15'
      }
    ],

    tests: [
      {
        input: '5 10\n1 2 3 4 5',
        output: '11 12 13 14 15'
      },
      {
        input: '4 -2\n5 0 -3 10',
        output: '3 -2 -5 8'
      },
      {
        input: '3 0\n7 8 9',
        output: '7 8 9'
      },
      {
        input: '1 100\n-100',
        output: '0'
      }
    ]
  },

  {
    id: 'day2-04',
    day: 2,
    title: 'Gộp xen kẽ hai Vector',

    description:
      'Cho hai vector A và B. Hãy tạo vector C bằng cách lần lượt lấy một phần tử từ A rồi một phần tử từ B. Nếu một vector hết trước, thêm toàn bộ phần tử còn lại của vector kia vào cuối.',

    inputDescription:
      'Dòng 1: n và m. Dòng 2: n phần tử của A. Dòng 3: m phần tử của B.',

    outputDescription:
      'In các phần tử của vector C theo thứ tự sau khi gộp, cách nhau bởi dấu cách.',

    constraints:
      '0 ≤ n, m ≤ 100000; n + m ≤ 200000; |aᵢ|, |bᵢ| ≤ 10⁹.',

    samples: [
      {
        input: '3 3\n1 2 3\n10 20 30',
        output: '1 10 2 20 3 30'
      }
    ],

    tests: [
      {
        input: '3 3\n1 2 3\n10 20 30',
        output: '1 10 2 20 3 30'
      },
      {
        input: '4 2\n1 2 3 4\n10 20',
        output: '1 10 2 20 3 4'
      },
      {
        input: '2 4\n5 6\n7 8 9 10',
        output: '5 7 6 8 9 10'
      },
      {
        input: '0 3\n\n1 2 3',
        output: '1 2 3'
      }
    ]
  }
];