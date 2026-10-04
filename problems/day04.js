// Day 04 — Kiểm tra 1: Vector + Set
// Mỗi bài cần id duy nhất, samples và ít nhất 3 tests.

export default [
  {
    id: 'day4-01',
    day: 4,
    title: 'Phần tử xuất hiện đúng một lần',

    description:
      'Cho n số nguyên. Hãy tìm các giá trị xuất hiện đúng một lần trong dãy và in chúng theo thứ tự tăng dần. Nên sử dụng set/multiset để xử lý.',

    inputDescription:
      'Dòng 1: số nguyên n. Dòng 2: n số nguyên.',

    outputDescription:
      'In các giá trị xuất hiện đúng một lần theo thứ tự tăng dần, cách nhau bởi dấu cách. Nếu không có giá trị nào, in một dòng trống.',

    constraints:
      '0 ≤ n ≤ 100000; |aᵢ| ≤ 10⁹.',

    samples: [
      {
        input: '8\n1 2 2 3 4 4 5 1',
        output: '3 5'
      }
    ],

    tests: [
      {
        input: '8\n1 2 2 3 4 4 5 1',
        output: '3 5'
      },
      {
        input: '5\n1 1 1 1 1',
        output: ''
      },
      {
        input: '6\n-2 -1 -2 0 3 3',
        output: '-1 0'
      },
      {
        input: '7\n10 5 3 5 7 10 1',
        output: '1 3 7'
      }
    ]
  },

  {
    id: 'day4-02',
    day: 4,
    title: 'Hợp và giao của hai tập hợp',

    description:
      'Cho hai dãy A và B. Hãy coi mỗi dãy như một tập hợp. Dòng đầu tiên in hợp của hai tập hợp. Dòng thứ hai in giao của hai tập hợp. Mỗi giá trị chỉ xuất hiện một lần và các giá trị phải được in theo thứ tự tăng dần.',

    inputDescription:
      'Dòng 1: hai số nguyên n và m. Dòng 2: n phần tử của A. Dòng 3: m phần tử của B.',

    outputDescription:
      'Dòng 1: hợp của A và B theo thứ tự tăng dần. Dòng 2: giao của A và B theo thứ tự tăng dần. Nếu giao rỗng, dòng thứ hai là dòng trống.',

    constraints:
      '0 ≤ n, m ≤ 100000; n + m ≤ 200000; |aᵢ|, |bᵢ| ≤ 10⁹.',

    samples: [
      {
        input: '5 5\n1 2 3 4 5\n3 4 5 6 7',
        output: '1 2 3 4 5 6 7\n3 4 5'
      }
    ],

    tests: [
      {
        input: '5 5\n1 2 3 4 5\n3 4 5 6 7',
        output: '1 2 3 4 5 6 7\n3 4 5'
      },
      {
        input: '4 3\n1 1 2 2\n2 2 3',
        output: '1 2 3\n2'
      },
      {
        input: '3 3\n1 2 3\n4 5 6',
        output: '1 2 3 4 5 6\n'
      },
      {
        input: '4 5\n-3 -1 0 5\n-3 0 2 5 8',
        output: '-3 -1 0 2 5 8\n-3 0 5'
      }
    ]
  },

  {
    id: 'day4-03',
    day: 4,
    title: 'BONUS — Xóa trùng nhưng giữ thứ tự',

    description:
      'Cho n số nguyên. Hãy xóa các phần tử bị lặp nhưng giữ lại lần xuất hiện đầu tiên của mỗi giá trị. Thứ tự các phần tử còn lại phải giống thứ tự xuất hiện trong dãy ban đầu. Gợi ý: dùng set để kiểm tra một giá trị đã xuất hiện hay chưa và vector để lưu kết quả.',

    inputDescription:
      'Dòng 1: số nguyên n. Dòng 2: n số nguyên.',

    outputDescription:
      'In dãy sau khi loại các lần xuất hiện trùng, giữ lần xuất hiện đầu tiên. Các phần tử cách nhau bởi dấu cách. Nếu n = 0, in một dòng trống.',

    constraints:
      '0 ≤ n ≤ 100000; |aᵢ| ≤ 10⁹.',

    samples: [
      {
        input: '7\n3 1 3 2 1 5 2',
        output: '3 1 2 5'
      }
    ],

    tests: [
      {
        input: '7\n3 1 3 2 1 5 2',
        output: '3 1 2 5'
      },
      {
        input: '5\n1 1 1 1 1',
        output: '1'
      },
      {
        input: '6\n-2 0 -2 3 0 5',
        output: '-2 0 3 5'
      },
      {
        input: '5\n5 4 3 2 1',
        output: '5 4 3 2 1'
      }
    ]
  }
];