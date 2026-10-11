// Day 09 — lower_bound và upper_bound
// Mỗi bài cần id duy nhất, samples và ít nhất 3 tests.

export default [
  {
    id: 'day9-01',
    day: 9,
    title: 'Lower Bound và Upper Bound',

    description:
      'Cho dãy n số nguyên đã được sắp xếp tăng dần và số x. Hãy tìm vị trí đầu tiên có giá trị >= x và vị trí đầu tiên có giá trị > x. Vị trí được đánh số từ 0. Nếu không tồn tại vị trí phù hợp, in n.',

    inputDescription:
      'Dòng 1: n và x. Dòng 2: n số nguyên đã được sắp xếp tăng dần.',

    outputDescription:
      'In hai số: vị trí lower_bound(x) và vị trí upper_bound(x).',

    constraints:
      '0 ≤ n ≤ 100000; |aᵢ|, |x| ≤ 10⁹; dãy a được sắp xếp tăng dần.',

    samples: [
      {
        input: '7 3\n1 2 3 3 3 5 8',
        output: '2 5'
      }
    ],

    tests: [
      {
        input: '7 3\n1 2 3 3 3 5 8',
        output: '2 5'
      },
      {
        input: '5 4\n1 2 5 7 9',
        output: '2 2'
      },
      {
        input: '5 10\n1 2 5 7 9',
        output: '5 5'
      },
      {
        input: '5 -10\n-5 0 2 4 8',
        output: '0 0'
      },
      {
        input: '0 5',
        output: '0 0'
      }
    ]
  },

  {
    id: 'day9-02',
    day: 9,
    title: 'Đếm số lần xuất hiện của X',

    description:
      'Cho dãy n số nguyên đã được sắp xếp tăng dần và số x. Hãy dùng lower_bound() và upper_bound() để tính số lần x xuất hiện trong dãy. Không duyệt toàn bộ dãy để đếm.',

    inputDescription:
      'Dòng 1: n và x. Dòng 2: n số nguyên đã được sắp xếp tăng dần.',

    outputDescription:
      'In số lần x xuất hiện trong dãy.',

    constraints:
      '0 ≤ n ≤ 100000; |aᵢ|, |x| ≤ 10⁹; dãy a được sắp xếp tăng dần.',

    samples: [
      {
        input: '8 2\n1 2 2 2 2 5 7 9',
        output: '4'
      }
    ],

    tests: [
      {
        input: '8 2\n1 2 2 2 2 5 7 9',
        output: '4'
      },
      {
        input: '6 5\n1 2 3 4 5 5',
        output: '2'
      },
      {
        input: '5 10\n1 3 5 7 9',
        output: '0'
      },
      {
        input: '7 -2\n-2 -2 -2 0 3 3 5',
        output: '3'
      },
      {
        input: '1 100\n100',
        output: '1'
      }
    ]
  },

  {
    id: 'day9-03',
    day: 9,
    title: 'Đếm phần tử trong đoạn giá trị',

    description:
      'Cho dãy n số nguyên đã được sắp xếp tăng dần và hai số L, R với L <= R. Hãy đếm có bao nhiêu phần tử có giá trị nằm trong đoạn [L, R]. Sử dụng lower_bound() và upper_bound().',

    inputDescription:
      'Dòng 1: n, L và R. Dòng 2: n số nguyên đã được sắp xếp tăng dần.',

    outputDescription:
      'In số lượng phần tử x thỏa mãn L <= x <= R.',

    constraints:
      '0 ≤ n ≤ 100000; |aᵢ|, |L|, |R| ≤ 10⁹; L ≤ R; dãy a được sắp xếp tăng dần.',

    samples: [
      {
        input: '8 2 5\n1 2 2 3 5 5 7 9',
        output: '5'
      }
    ],

    tests: [
      {
        input: '8 2 5\n1 2 2 3 5 5 7 9',
        output: '5'
      },
      {
        input: '6 3 6\n1 2 3 4 5 6',
        output: '4'
      },
      {
        input: '5 10 20\n1 3 5 7 9',
        output: '0'
      },
      {
        input: '7 -3 0\n-5 -3 -3 -1 0 2 8',
        output: '4'
      },
      {
        input: '4 -100 100\n-5 0 5 10',
        output: '4'
      }
    ]
  },

  {
    id: 'day9-04',
    day: 9,
    title: 'BONUS — Nhiều truy vấn đếm đoạn',

    description:
      'Cho dãy n số nguyên đã được sắp xếp tăng dần và q truy vấn. Mỗi truy vấn gồm L và R. Với mỗi truy vấn, hãy đếm số phần tử có giá trị nằm trong đoạn [L, R]. Mỗi truy vấn phải được xử lý bằng lower_bound() và upper_bound(), không duyệt lại toàn bộ dãy.',

    inputDescription:
      'Dòng 1: n và q. Dòng 2: n số nguyên đã được sắp xếp tăng dần. q dòng tiếp theo, mỗi dòng chứa L và R.',

    outputDescription:
      'Với mỗi truy vấn, in số lượng phần tử nằm trong đoạn [L, R] trên một dòng.',

    constraints:
      '0 ≤ n, q ≤ 100000; |aᵢ|, |L|, |R| ≤ 10⁹; L ≤ R; dãy a được sắp xếp tăng dần.',

    samples: [
      {
        input: '8 4\n1 2 2 3 5 5 7 9\n2 5\n1 1\n4 8\n10 20',
        output: '5\n1\n3\n0'
      }
    ],

    tests: [
      {
        input: '8 4\n1 2 2 3 5 5 7 9\n2 5\n1 1\n4 8\n10 20',
        output: '5\n1\n3\n0'
      },
      {
        input: '6 3\n-5 -2 0 0 8 10\n-5 0\n0 0\n1 100',
        output: '4\n2\n2'
      },
      {
        input: '5 4\n1 1 1 1 1\n1 1\n0 0\n0 1\n2 10',
        output: '5\n0\n5\n0'
      },
      {
        input: '0 3\n\n1 10\n-5 5\n0 0',
        output: '0\n0\n0'
      }
    ]
  }
];