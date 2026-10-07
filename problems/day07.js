// Day 07 — Sort và hàm so sánh
// Mỗi bài cần id duy nhất, samples và ít nhất 3 tests.

export default [
  {
    id: 'day7-01',
    day: 7,
    title: 'Sắp xếp dãy số',

    description:
      'Cho n số nguyên. Hãy sắp xếp dãy theo thứ tự tăng dần ở dòng đầu và giảm dần ở dòng thứ hai. Sử dụng sort().',

    inputDescription:
      'Dòng 1: số nguyên n. Dòng 2: n số nguyên.',

    outputDescription:
      'Dòng 1: dãy được sắp xếp tăng dần. Dòng 2: dãy được sắp xếp giảm dần.',

    constraints:
      '1 ≤ n ≤ 100000; |aᵢ| ≤ 10⁹.',

    samples: [
      {
        input: '5\n4 1 5 2 3',
        output: '1 2 3 4 5\n5 4 3 2 1'
      }
    ],

    tests: [
      {
        input: '5\n4 1 5 2 3',
        output: '1 2 3 4 5\n5 4 3 2 1'
      },
      {
        input: '6\n-2 5 0 -7 5 3',
        output: '-7 -2 0 3 5 5\n5 5 3 0 -2 -7'
      },
      {
        input: '4\n8 8 8 8',
        output: '8 8 8 8\n8 8 8 8'
      },
      {
        input: '1\n100',
        output: '100\n100'
      }
    ]
  },

  {
    id: 'day7-02',
    day: 7,
    title: 'Sắp xếp cặp theo hai tiêu chí',

    description:
      'Cho n cặp số (a, b). Hãy sắp xếp các cặp theo a tăng dần. Nếu hai cặp có cùng a, cặp có b lớn hơn phải đứng trước. Hãy tự viết hàm so sánh cmp.',

    inputDescription:
      'Dòng 1: số nguyên n. n dòng tiếp theo, mỗi dòng chứa hai số nguyên a và b.',

    outputDescription:
      'In n cặp sau khi sắp xếp, mỗi cặp trên một dòng.',

    constraints:
      '1 ≤ n ≤ 100000; |a|, |b| ≤ 10⁹.',

    samples: [
      {
        input: '5\n2 3\n1 5\n2 7\n1 2\n3 4',
        output: '1 5\n1 2\n2 7\n2 3\n3 4'
      }
    ],

    tests: [
      {
        input: '5\n2 3\n1 5\n2 7\n1 2\n3 4',
        output: '1 5\n1 2\n2 7\n2 3\n3 4'
      },
      {
        input: '4\n1 1\n1 4\n1 2\n1 3',
        output: '1 4\n1 3\n1 2\n1 1'
      },
      {
        input: '5\n-1 5\n0 3\n-1 10\n0 -2\n2 1',
        output: '-1 10\n-1 5\n0 3\n0 -2\n2 1'
      },
      {
        input: '3\n5 5\n2 2\n3 3',
        output: '2 2\n3 3\n5 5'
      }
    ]
  },

  {
    id: 'day7-03',
    day: 7,
    title: 'Sắp xếp chuỗi theo quy tắc',

    description:
      'Cho n chuỗi không chứa khoảng trắng. Hãy sắp xếp các chuỗi theo độ dài tăng dần. Nếu hai chuỗi có cùng độ dài, sắp xếp theo thứ tự từ điển tăng dần.',

    inputDescription:
      'Dòng 1: số nguyên n. n dòng tiếp theo, mỗi dòng chứa một chuỗi.',

    outputDescription:
      'In các chuỗi sau khi sắp xếp, mỗi chuỗi trên một dòng.',

    constraints:
      '1 ≤ n ≤ 100000; mỗi chuỗi có độ dài từ 1 đến 100.',

    samples: [
      {
        input: '5\nbanana\ncat\napple\ndog\nhi',
        output: 'hi\ncat\ndog\napple\nbanana'
      }
    ],

    tests: [
      {
        input: '5\nbanana\ncat\napple\ndog\nhi',
        output: 'hi\ncat\ndog\napple\nbanana'
      },
      {
        input: '4\nbbb\naaa\nccc\naa',
        output: 'aa\naaa\nbbb\nccc'
      },
      {
        input: '5\nz\na\nabc\nab\nxy',
        output: 'a\nz\nab\nxy\nabc'
      },
      {
        input: '4\ncode\ncpp\njava\nc',
        output: 'c\ncpp\ncode\njava'
      }
    ]
  },

  {
    id: 'day7-04',
    day: 7,
    title: 'BONUS — Xếp hạng thí sinh',

    description:
      'Có n thí sinh. Mỗi thí sinh gồm id, score và penalty. Hãy xếp hạng theo các tiêu chí: score cao hơn đứng trước; nếu score bằng nhau thì penalty thấp hơn đứng trước; nếu vẫn bằng nhau thì id nhỏ hơn đứng trước. Hãy tự viết comparator. Không được dùng <= hoặc >= trong comparator.',

    inputDescription:
      'Dòng 1: số nguyên n. n dòng tiếp theo gồm ba số nguyên: id, score, penalty.',

    outputDescription:
      'In danh sách sau khi xếp hạng. Mỗi dòng gồm id, score và penalty.',

    constraints:
      '1 ≤ n ≤ 100000; 1 ≤ id ≤ 10⁹; 0 ≤ score, penalty ≤ 10⁹.',

    samples: [
      {
        input: '5\n1 100 30\n2 120 50\n3 100 20\n4 120 40\n5 100 20',
        output: '4 120 40\n2 120 50\n3 100 20\n5 100 20\n1 100 30'
      }
    ],

    tests: [
      {
        input: '5\n1 100 30\n2 120 50\n3 100 20\n4 120 40\n5 100 20',
        output: '4 120 40\n2 120 50\n3 100 20\n5 100 20\n1 100 30'
      },
      {
        input: '4\n10 50 100\n2 50 100\n5 60 200\n1 60 300',
        output: '5 60 200\n1 60 300\n2 50 100\n10 50 100'
      },
      {
        input: '3\n3 100 10\n2 100 10\n1 100 10',
        output: '1 100 10\n2 100 10\n3 100 10'
      },
      {
        input: '4\n1 0 0\n2 10 100\n3 10 50\n4 20 500',
        output: '4 20 500\n3 10 50\n2 10 100\n1 0 0'
      }
    ]
  }
];