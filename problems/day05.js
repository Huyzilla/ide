// Day 05 — Map (ánh xạ khóa–giá trị)
// Mỗi bài cần id duy nhất, samples và ít nhất 3 tests.

export default [
  {
    id: 'day5-01',
    day: 5,
    title: 'Đếm tần suất',

    description:
      'Cho n số nguyên. Hãy dùng map để đếm số lần xuất hiện của mỗi giá trị. In các giá trị theo thứ tự tăng dần, kèm theo số lần xuất hiện của chúng.',

    inputDescription:
      'Dòng 1: số nguyên n. Dòng 2: n số nguyên.',

    outputDescription:
      'Mỗi dòng gồm hai số x và cnt, trong đó x là một giá trị xuất hiện trong dãy và cnt là số lần xuất hiện của x. Các giá trị x được in theo thứ tự tăng dần.',

    constraints:
      '1 ≤ n ≤ 100000; |aᵢ| ≤ 10⁹.',

    samples: [
      {
        input: '8\n1 2 1 3 2 1 5 3',
        output: '1 3\n2 2\n3 2\n5 1'
      }
    ],

    tests: [
      {
        input: '8\n1 2 1 3 2 1 5 3',
        output: '1 3\n2 2\n3 2\n5 1'
      },
      {
        input: '5\n7 7 7 7 7',
        output: '7 5'
      },
      {
        input: '6\n-2 0 -2 5 0 -2',
        output: '-2 3\n0 2\n5 1'
      },
      {
        input: '5\n5 4 3 2 1',
        output: '1 1\n2 1\n3 1\n4 1\n5 1'
      }
    ]
  },

  {
    id: 'day5-02',
    day: 5,
    title: 'Phần tử xuất hiện nhiều nhất',

    description:
      'Cho n số nguyên. Hãy tìm giá trị xuất hiện nhiều lần nhất và số lần xuất hiện của nó. Nếu có nhiều giá trị cùng tần suất lớn nhất, chọn giá trị nhỏ nhất.',

    inputDescription:
      'Dòng 1: số nguyên n. Dòng 2: n số nguyên.',

    outputDescription:
      'In hai số: giá trị xuất hiện nhiều nhất và số lần xuất hiện của giá trị đó.',

    constraints:
      '1 ≤ n ≤ 100000; |aᵢ| ≤ 10⁹.',

    samples: [
      {
        input: '8\n1 2 2 3 3 3 4 4',
        output: '3 3'
      }
    ],

    tests: [
      {
        input: '8\n1 2 2 3 3 3 4 4',
        output: '3 3'
      },
      {
        input: '6\n5 5 2 2 9 1',
        output: '2 2'
      },
      {
        input: '5\n-1 -1 -1 2 2',
        output: '-1 3'
      },
      {
        input: '4\n10 20 30 40',
        output: '10 1'
      }
    ]
  },

  {
    id: 'day5-03',
    day: 5,
    title: 'Thống kê tổng theo khóa',

    description:
      'Có n bản ghi, mỗi bản ghi gồm một khóa k và một giá trị v. Những bản ghi có cùng khóa thuộc cùng một nhóm. Hãy tính tổng các giá trị v của từng khóa. Dùng map để lưu và cập nhật kết quả.',

    inputDescription:
      'Dòng 1: số nguyên n. n dòng tiếp theo, mỗi dòng gồm hai số nguyên k và v.',

    outputDescription:
      'Với mỗi khóa, in k và tổng các giá trị thuộc khóa đó. Các khóa được in theo thứ tự tăng dần.',

    constraints:
      '1 ≤ n ≤ 100000; |k| ≤ 10⁹; |v| ≤ 10⁹. Tổng kết quả nằm trong kiểu long long.',

    samples: [
      {
        input: '6\n1 10\n2 5\n1 7\n3 20\n2 8\n1 3',
        output: '1 20\n2 13\n3 20'
      }
    ],

    tests: [
      {
        input: '6\n1 10\n2 5\n1 7\n3 20\n2 8\n1 3',
        output: '1 20\n2 13\n3 20'
      },
      {
        input: '4\n5 100\n5 -30\n2 10\n2 20',
        output: '2 30\n5 70'
      },
      {
        input: '5\n-1 5\n2 10\n-1 15\n0 7\n2 -3',
        output: '-1 20\n0 7\n2 7'
      },
      {
        input: '3\n10 1000000000\n10 1000000000\n10 1000000000',
        output: '10 3000000000'
      }
    ]
  },

  {
    id: 'day5-04',
    day: 5,
    title: 'BONUS — Nhóm dữ liệu theo khóa',

    description:
      'Cho n cặp số (k, x). Hãy nhóm các giá trị x có cùng khóa k lại với nhau. Các khóa phải được in theo thứ tự tăng dần. Bên trong mỗi nhóm, giữ nguyên thứ tự xuất hiện của các giá trị trong input. Gợi ý: dùng map<int, vector<int>>.',

    inputDescription:
      'Dòng 1: số nguyên n. n dòng tiếp theo, mỗi dòng gồm khóa k và giá trị x.',

    outputDescription:
      'Mỗi dòng bắt đầu bằng khóa k, tiếp theo là dấu hai chấm ":" và các giá trị thuộc khóa đó theo thứ tự xuất hiện.',

    constraints:
      '1 ≤ n ≤ 100000; |k|, |x| ≤ 10⁹.',

    samples: [
      {
        input: '7\n2 10\n1 5\n2 20\n3 7\n1 8\n2 30\n3 9',
        output: '1: 5 8\n2: 10 20 30\n3: 7 9'
      }
    ],

    tests: [
      {
        input: '7\n2 10\n1 5\n2 20\n3 7\n1 8\n2 30\n3 9',
        output: '1: 5 8\n2: 10 20 30\n3: 7 9'
      },
      {
        input: '5\n1 4\n1 3\n1 2\n1 1\n1 0',
        output: '1: 4 3 2 1 0'
      },
      {
        input: '5\n3 30\n-1 5\n3 20\n0 10\n-1 7',
        output: '-1: 5 7\n0: 10\n3: 30 20'
      },
      {
        input: '4\n4 1\n3 2\n2 3\n1 4',
        output: '1: 4\n2: 3\n3: 2\n4: 1'
      }
    ]
  }
];