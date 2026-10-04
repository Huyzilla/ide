// Day 03 — Set & Multiset
// Mỗi bài cần id duy nhất, samples và ít nhất 3 tests.

export default [
  {
    id: 'day3-01',
    day: 3,
    title: 'Các phần tử phân biệt',

    description:
      'Cho n số nguyên. Hãy dùng set để tìm các giá trị phân biệt trong dãy và in chúng theo thứ tự tăng dần.',

    inputDescription:
      'Dòng 1: số nguyên n. Dòng 2: n số nguyên.',

    outputDescription:
      'Dòng 1: số lượng giá trị phân biệt. Dòng 2: các giá trị phân biệt theo thứ tự tăng dần, cách nhau bởi dấu cách.',

    constraints:
      '0 ≤ n ≤ 100000; |aᵢ| ≤ 10⁹.',

    samples: [
      {
        input: '7\n4 2 4 1 2 7 1',
        output: '4\n1 2 4 7'
      }
    ],

    tests: [
      {
        input: '7\n4 2 4 1 2 7 1',
        output: '4\n1 2 4 7'
      },
      {
        input: '5\n1 1 1 1 1',
        output: '1\n1'
      },
      {
        input: '6\n-3 0 -3 5 0 2',
        output: '4\n-3 0 2 5'
      },
      {
        input: '1\n100',
        output: '1\n100'
      }
    ]
  },

  {
    id: 'day3-02',
    day: 3,
    title: 'Kiểm tra phần tử có tồn tại',

    description:
      'Cho n số nguyên và q truy vấn. Với mỗi truy vấn x, hãy kiểm tra x có xuất hiện trong dãy ban đầu hay không. Hãy dùng set và hàm find() hoặc count().',

    inputDescription:
      'Dòng 1: n. Dòng 2: n số nguyên. Dòng 3: q. q dòng tiếp theo, mỗi dòng chứa một số nguyên x.',

    outputDescription:
      'Với mỗi truy vấn, in YES nếu x xuất hiện trong dãy, ngược lại in NO.',

    constraints:
      '0 ≤ n, q ≤ 100000; |aᵢ|, |x| ≤ 10⁹.',

    samples: [
      {
        input: '5\n1 3 5 7 9\n4\n3\n4\n9\n10',
        output: 'YES\nNO\nYES\nNO'
      }
    ],

    tests: [
      {
        input: '5\n1 3 5 7 9\n4\n3\n4\n9\n10',
        output: 'YES\nNO\nYES\nNO'
      },
      {
        input: '4\n-5 0 8 10\n3\n-5\n5\n0',
        output: 'YES\nNO\nYES'
      },
      {
        input: '3\n2 2 2\n3\n2\n1\n3',
        output: 'YES\nNO\nNO'
      },
      {
        input: '0\n\n2\n1\n0',
        output: 'NO\nNO'
      }
    ]
  },

  {
    id: 'day3-03',
    day: 3,
    title: 'Xóa một lần xuất hiện',

    description:
      'Cho n số nguyên và một số x. Lưu toàn bộ dãy vào multiset. Nếu x tồn tại, hãy xóa đúng một lần xuất hiện của x. Sau đó in các phần tử còn lại theo thứ tự tăng dần.',

    inputDescription:
      'Dòng 1: n và x. Dòng 2: n số nguyên.',

    outputDescription:
      'In các phần tử còn lại theo thứ tự tăng dần, cách nhau bởi dấu cách. Nếu multiset rỗng, in một dòng trống.',

    constraints:
      '0 ≤ n ≤ 100000; |aᵢ|, |x| ≤ 10⁹.',

    samples: [
      {
        input: '6 2\n4 2 1 2 5 2',
        output: '1 2 2 4 5'
      }
    ],

    tests: [
      {
        input: '6 2\n4 2 1 2 5 2',
        output: '1 2 2 4 5'
      },
      {
        input: '5 10\n1 3 5 7 9',
        output: '1 3 5 7 9'
      },
      {
        input: '4 -1\n-1 -1 0 2',
        output: '-1 0 2'
      },
      {
        input: '1 5\n5',
        output: ''
      }
    ]
  },

  {
    id: 'day3-04',
    day: 3,
    title: 'Giao của hai tập hợp',

    description:
      'Cho hai dãy A và B. Hãy tìm các giá trị xuất hiện trong cả hai dãy. Mỗi giá trị chỉ in một lần và kết quả phải theo thứ tự tăng dần. Nên dùng set.',

    inputDescription:
      'Dòng 1: n và m. Dòng 2: n phần tử của A. Dòng 3: m phần tử của B.',

    outputDescription:
      'In các giá trị xuất hiện trong cả A và B theo thứ tự tăng dần. Nếu không có giá trị chung, in một dòng trống.',

    constraints:
      '0 ≤ n, m ≤ 100000; |aᵢ|, |bᵢ| ≤ 10⁹.',

    samples: [
      {
        input: '5 6\n1 2 3 4 5\n3 4 4 5 6 7',
        output: '3 4 5'
      }
    ],

    tests: [
      {
        input: '5 6\n1 2 3 4 5\n3 4 4 5 6 7',
        output: '3 4 5'
      },
      {
        input: '4 4\n1 1 2 2\n2 2 3 3',
        output: '2'
      },
      {
        input: '3 3\n-3 0 5\n-3 5 10',
        output: '-3 5'
      },
      {
        input: '3 2\n1 2 3\n4 5',
        output: ''
      }
    ]
  }
];