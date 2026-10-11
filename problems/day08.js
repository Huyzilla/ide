// Day 08 — Tìm kiếm nhị phân cơ bản
// Mỗi bài cần id duy nhất, samples và ít nhất 3 tests.

export default [
  {
    id: 'day8-01',
    day: 8,
    title: 'Tự viết tìm kiếm nhị phân',

    description:
      'Cho một dãy n số nguyên đã được sắp xếp tăng dần và số x. Hãy tự cài đặt thuật toán tìm kiếm nhị phân để tìm x. Nếu x xuất hiện nhiều lần, có thể trả về bất kỳ vị trí nào chứa x. Không dùng binary_search(), lower_bound() hoặc upper_bound(). Vị trí được đánh số từ 0.',

    inputDescription:
      'Dòng 1: n và x. Dòng 2: n số nguyên đã được sắp xếp tăng dần.',

    outputDescription:
      'Nếu tìm thấy x, in một vị trí chứa x. Nếu không tìm thấy, in -1.',

    constraints:
      '0 ≤ n ≤ 100000; |aᵢ|, |x| ≤ 10⁹; dãy a được sắp xếp tăng dần.',

    samples: [
      {
        input: '5 7\n1 3 5 7 9',
        output: '3'
      }
    ],

    tests: [
      {
        input: '5 7\n1 3 5 7 9',
        output: '3'
      },
      {
        input: '5 4\n1 3 5 7 9',
        output: '-1'
      },
      {
        input: '1 10\n10',
        output: '0'
      },
      {
        input: '0 5',
        output: '-1'
      }
    ]
  },

  {
    id: 'day8-02',
    day: 8,
    title: 'Vị trí đầu tiên và cuối cùng',

    description:
      'Cho một dãy n số nguyên đã được sắp xếp tăng dần và số x. Hãy tìm vị trí đầu tiên và vị trí cuối cùng mà x xuất hiện trong dãy bằng tìm kiếm nhị phân. Vị trí được đánh số từ 0. Không duyệt tuyến tính toàn bộ dãy để tìm kết quả.',

    inputDescription:
      'Dòng 1: n và x. Dòng 2: n số nguyên đã được sắp xếp tăng dần.',

    outputDescription:
      'In hai số first và last là vị trí xuất hiện đầu tiên và cuối cùng của x. Nếu x không tồn tại, in -1 -1.',

    constraints:
      '0 ≤ n ≤ 100000; |aᵢ|, |x| ≤ 10⁹; dãy a được sắp xếp tăng dần.',

    samples: [
      {
        input: '8 2\n1 2 2 2 2 5 7 9',
        output: '1 4'
      }
    ],

    tests: [
      {
        input: '8 2\n1 2 2 2 2 5 7 9',
        output: '1 4'
      },
      {
        input: '6 5\n1 2 3 4 5 5',
        output: '4 5'
      },
      {
        input: '5 10\n1 3 5 7 9',
        output: '-1 -1'
      },
      {
        input: '1 -3\n-3',
        output: '0 0'
      }
    ]
  },

  {
    id: 'day8-03',
    day: 8,
    title: 'Trả lời nhiều truy vấn',

    description:
      'Cho một dãy n số nguyên đã được sắp xếp tăng dần và q truy vấn. Mỗi truy vấn cho một số x. Với mỗi x, hãy dùng binary_search() trong STL để kiểm tra x có nằm trong dãy hay không.',

    inputDescription:
      'Dòng 1: n và q. Dòng 2: n số nguyên đã được sắp xếp tăng dần. q dòng tiếp theo, mỗi dòng chứa một số x.',

    outputDescription:
      'Với mỗi truy vấn, in YES nếu x tồn tại trong dãy, ngược lại in NO.',

    constraints:
      '0 ≤ n, q ≤ 100000; |aᵢ|, |x| ≤ 10⁹; dãy a được sắp xếp tăng dần.',

    samples: [
      {
        input: '5 4\n1 3 5 7 9\n3\n4\n9\n10',
        output: 'YES\nNO\nYES\nNO'
      }
    ],

    tests: [
      {
        input: '5 4\n1 3 5 7 9\n3\n4\n9\n10',
        output: 'YES\nNO\nYES\nNO'
      },
      {
        input: '6 4\n-5 -2 0 0 8 10\n-5\n0\n7\n10',
        output: 'YES\nYES\nNO\nYES'
      },
      {
        input: '1 3\n100\n100\n99\n101',
        output: 'YES\nNO\nNO'
      },
      {
        input: '0 3\n\n1\n0\n-1',
        output: 'NO\nNO\nNO'
      }
    ]
  },

  {
    id: 'day8-04',
    day: 8,
    title: 'BONUS — Tìm vị trí chèn',

    description:
      'Cho một dãy n số nguyên đã được sắp xếp tăng dần và số x. Hãy tìm vị trí nhỏ nhất mà có thể chèn x vào để dãy vẫn được sắp xếp tăng dần. Nếu trong dãy đã có các phần tử bằng x, x phải được chèn trước phần tử x đầu tiên. Vị trí được đánh số từ 0. Có thể dùng lower_bound().',

    inputDescription:
      'Dòng 1: n và x. Dòng 2: n số nguyên đã được sắp xếp tăng dần.',

    outputDescription:
      'In vị trí cần chèn x.',

    constraints:
      '0 ≤ n ≤ 100000; |aᵢ|, |x| ≤ 10⁹; dãy a được sắp xếp tăng dần.',

    samples: [
      {
        input: '5 4\n1 3 5 7 9',
        output: '2'
      }
    ],

    tests: [
      {
        input: '5 4\n1 3 5 7 9',
        output: '2'
      },
      {
        input: '5 5\n1 3 5 5 9',
        output: '2'
      },
      {
        input: '4 -10\n-5 0 3 8',
        output: '0'
      },
      {
        input: '4 100\n1 2 3 4',
        output: '4'
      },
      {
        input: '0 7',
        output: '0'
      }
    ]
  }
];