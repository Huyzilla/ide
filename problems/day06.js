// Day 06 — Multimap và bảng băm
// Mỗi bài cần id duy nhất, samples và ít nhất 3 tests.

export default [
  {
    id: 'day6-01',
    day: 6,
    title: 'Đếm tần suất với Unordered Map',

    description:
      'Cho n số nguyên và q truy vấn. Hãy dùng unordered_map để đếm tần suất của các giá trị trong dãy. Với mỗi truy vấn x, in số lần x xuất hiện trong dãy.',

    inputDescription:
      'Dòng 1: n và q. Dòng 2: n số nguyên. q dòng tiếp theo, mỗi dòng chứa một số nguyên x.',

    outputDescription:
      'Với mỗi truy vấn x, in số lần x xuất hiện trong dãy trên một dòng.',

    constraints:
      '0 ≤ n, q ≤ 100000; |aᵢ|, |x| ≤ 10⁹.',

    samples: [
      {
        input: '8 4\n1 2 1 3 2 1 5 3\n1\n2\n4\n5',
        output: '3\n2\n0\n1'
      }
    ],

    tests: [
      {
        input: '8 4\n1 2 1 3 2 1 5 3\n1\n2\n4\n5',
        output: '3\n2\n0\n1'
      },
      {
        input: '5 3\n7 7 7 7 7\n7\n1\n0',
        output: '5\n0\n0'
      },
      {
        input: '6 4\n-2 0 -2 5 0 -2\n-2\n0\n5\n10',
        output: '3\n2\n1\n0'
      },
      {
        input: '0 3\n\n1\n0\n-5',
        output: '0\n0\n0'
      }
    ]
  },

  {
    id: 'day6-02',
    day: 6,
    title: 'Đếm số giá trị phân biệt',

    description:
      'Cho n số nguyên. Hãy dùng unordered_set để xác định có bao nhiêu giá trị khác nhau xuất hiện trong dãy.',

    inputDescription:
      'Dòng 1: số nguyên n. Dòng 2: n số nguyên.',

    outputDescription:
      'In một số nguyên là số lượng giá trị phân biệt trong dãy.',

    constraints:
      '0 ≤ n ≤ 100000; |aᵢ| ≤ 10⁹.',

    samples: [
      {
        input: '8\n1 2 1 3 2 5 3 3',
        output: '4'
      }
    ],

    tests: [
      {
        input: '8\n1 2 1 3 2 5 3 3',
        output: '4'
      },
      {
        input: '5\n7 7 7 7 7',
        output: '1'
      },
      {
        input: '6\n-2 0 -2 5 0 -2',
        output: '3'
      },
      {
        input: '0',
        output: '0'
      }
    ]
  },

  {
    id: 'day6-03',
    day: 6,
    title: 'Tra cứu nhiều giá trị theo khóa',

    description:
      'Cho n cặp (key, value). Một key có thể xuất hiện nhiều lần với các value khác nhau. Hãy lưu dữ liệu bằng multimap. Sau đó trả lời q truy vấn. Với mỗi key được hỏi, in tất cả value thuộc key đó theo thứ tự tăng dần. Nếu key không tồn tại, in EMPTY.',

    inputDescription:
      'Dòng 1: n. n dòng tiếp theo, mỗi dòng gồm key và value. Dòng tiếp theo: q. q dòng tiếp theo, mỗi dòng chứa một key cần truy vấn.',

    outputDescription:
      'Với mỗi truy vấn, in các value tương ứng với key theo thứ tự tăng dần, cách nhau bởi dấu cách. Nếu không có value nào, in EMPTY.',

    constraints:
      '0 ≤ n, q ≤ 100000; |key|, |value| ≤ 10⁹.',

    samples: [
      {
        input:
          '6\n1 10\n2 5\n1 7\n3 20\n2 8\n1 3\n4\n1\n2\n3\n4',
        output:
          '3 7 10\n5 8\n20\nEMPTY'
      }
    ],

    tests: [
      {
        input:
          '6\n1 10\n2 5\n1 7\n3 20\n2 8\n1 3\n4\n1\n2\n3\n4',
        output:
          '3 7 10\n5 8\n20\nEMPTY'
      },
      {
        input:
          '5\n5 100\n5 -30\n2 10\n5 20\n2 -5\n3\n5\n2\n1',
        output:
          '-30 20 100\n-5 10\nEMPTY'
      },
      {
        input:
          '4\n-1 5\n-1 5\n-1 2\n0 9\n2\n-1\n0',
        output:
          '2 5 5\n9'
      },
      {
        input:
          '0\n3\n1\n2\n3',
        output:
          'EMPTY\nEMPTY\nEMPTY'
      }
    ]
  },

  {
    id: 'day6-04',
    day: 6,
    title: 'BONUS — Bảng tần suất có thứ tự',

    description:
      'Cho n số nguyên. Hãy in bảng tần suất gồm mỗi giá trị và số lần xuất hiện của nó theo thứ tự tăng dần của giá trị. Hãy thử giải bài này theo hai cách: (1) dùng map; (2) dùng unordered_map để đếm rồi đưa các khóa ra vector và sắp xếp. So sánh hai cách.',

    inputDescription:
      'Dòng 1: số nguyên n. Dòng 2: n số nguyên.',

    outputDescription:
      'Mỗi dòng gồm giá trị x và số lần xuất hiện của x. Các giá trị x phải được in theo thứ tự tăng dần.',

    constraints:
      '1 ≤ n ≤ 100000; |aᵢ| ≤ 10⁹.',

    samples: [
      {
        input: '8\n4 2 4 1 2 7 1 4',
        output: '1 2\n2 2\n4 3\n7 1'
      }
    ],

    tests: [
      {
        input: '8\n4 2 4 1 2 7 1 4',
        output: '1 2\n2 2\n4 3\n7 1'
      },
      {
        input: '5\n5 5 5 5 5',
        output: '5 5'
      },
      {
        input: '6\n-3 0 -3 5 0 2',
        output: '-3 2\n0 2\n2 1\n5 1'
      },
      {
        input: '5\n100 -100 0 100 -100',
        output: '-100 2\n0 1\n100 2'
      }
    ]
  }
];