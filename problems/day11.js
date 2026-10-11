// Day 11 — Kiểm tra 2, học bù
// Mỗi bài có samples và ít nhất 4 tests.

export default [
  {
    "id": "day11-01",
    "day": 11,
    "title": "KIỂM TRA — Truy vấn tần suất",
    "description": "Cho dãy A chưa được sắp xếp và q truy vấn x. Với mỗi truy vấn, in số lần x xuất hiện trong A. Không được duyệt lại toàn bộ dãy cho mỗi truy vấn; hãy tự chọn cấu trúc dữ liệu phù hợp.",
    "inputDescription": "Dòng 1: n q. Dòng 2: n số nguyên của A. q dòng tiếp theo: mỗi dòng là một số x.",
    "outputDescription": "In q dòng, mỗi dòng là số lần xuất hiện của x tương ứng.",
    "constraints": "0 ≤ n, q ≤ 100000; |aᵢ|, |x| ≤ 10⁹.",
    "samples": [
      {
        "input": "8 5\n4 2 4 -1 2 4 7 0\n4\n2\n1\n-1\n0",
        "output": "3\n2\n0\n1\n1"
      }
    ],
    "tests": [
      {
        "input": "8 5\n4 2 4 -1 2 4 7 0\n4\n2\n1\n-1\n0",
        "output": "3\n2\n0\n1\n1"
      },
      {
        "input": "5 4\n10 10 10 20 30\n10\n20\n0\n30",
        "output": "3\n1\n0\n1"
      },
      {
        "input": "5 3\n-5 2 -5 0 2\n-5\n2\n100",
        "output": "2\n2\n0"
      },
      {
        "input": "0 3\n\n5\n0\n-1",
        "output": "0\n0\n0"
      }
    ]
  },
  {
    "id": "day11-02",
    "day": 11,
    "title": "KIỂM TRA — Đếm số trong đoạn giá trị",
    "description": "Cho dãy A chưa được sắp xếp và q truy vấn [L, R] (L ≤ R). Với mỗi truy vấn, đếm bao nhiêu phần tử của A nằm trong đoạn giá trị [L, R] (tính cả hai đầu). Không được duyệt lại toàn bộ dãy cho mỗi truy vấn. Gợi ý: sắp xếp dãy một lần và tìm kiếm nhị phân.",
    "inputDescription": "Dòng 1: n q. Dòng 2: n số nguyên của A. q dòng tiếp theo: mỗi dòng gồm L R.",
    "outputDescription": "In q dòng; mỗi dòng là số phần tử nằm trong đoạn của truy vấn tương ứng.",
    "constraints": "0 ≤ n, q ≤ 100000; |aᵢ|, |L|, |R| ≤ 10⁹; L ≤ R.",
    "samples": [
      {
        "input": "8 4\n5 1 3 2 2 7 9 5\n2 5\n6 10\n1 1\n10 20",
        "output": "5\n2\n1\n0"
      }
    ],
    "tests": [
      {
        "input": "8 4\n5 1 3 2 2 7 9 5\n2 5\n6 10\n1 1\n10 20",
        "output": "5\n2\n1\n0"
      },
      {
        "input": "6 3\n-5 2 -1 -1 0 8\n-1 0\n-10 -5\n1 10",
        "output": "3\n1\n2"
      },
      {
        "input": "5 3\n4 4 4 4 4\n4 4\n5 10\n-5 3",
        "output": "5\n0\n0"
      },
      {
        "input": "0 2\n\n0 10\n-5 5",
        "output": "0\n0"
      }
    ]
  },
  {
    "id": "day11-03",
    "day": 11,
    "title": "BONUS — Chỉ giữ phần tử xuất hiện đúng một lần",
    "description": "Cho dãy A chưa được sắp xếp. Hãy in những phần tử có tần suất đúng bằng 1, theo thứ tự xuất hiện ban đầu (không sắp xếp kết quả). Có thể kết hợp map/unordered_map với vector.",
    "inputDescription": "Dòng 1: n. Dòng 2: n số nguyên.",
    "outputDescription": "In những phần tử xuất hiện đúng một lần theo thứ tự ban đầu, cách nhau bởi dấu cách; nếu không có, in dòng trống.",
    "constraints": "0 ≤ n ≤ 100000; |aᵢ| ≤ 10⁹.",
    "samples": [
      {
        "input": "8\n4 2 4 1 3 2 7 1",
        "output": "3 7"
      }
    ],
    "tests": [
      {
        "input": "8\n4 2 4 1 3 2 7 1",
        "output": "3 7"
      },
      {
        "input": "5\n1 1 1 1 1",
        "output": ""
      },
      {
        "input": "6\n-2 0 -2 3 0 5",
        "output": "3 5"
      },
      {
        "input": "5\n5 4 3 2 1",
        "output": "5 4 3 2 1"
      },
      {
        "input": "0",
        "output": ""
      }
    ]
  },
  {
    "id": "day11-04",
    "day": 11,
    "title": "BONUS — Truy vấn phần tử gần nhất",
    "description": "Cho n số nguyên và q truy vấn x. Với mỗi truy vấn, tìm giá trị trong dãy có khoảng cách tuyệt đối tới x nhỏ nhất. Nếu có hai giá trị gần như nhau, chọn giá trị nhỏ hơn. Nếu dãy rỗng, in EMPTY. Không duyệt lại toàn bộ dãy cho mỗi truy vấn.",
    "inputDescription": "Dòng 1: n q. Dòng 2: n số nguyên. q dòng tiếp theo: mỗi dòng là một số x.",
    "outputDescription": "Với mỗi truy vấn, in giá trị gần x nhất hoặc EMPTY nếu n = 0.",
    "constraints": "0 ≤ n, q ≤ 100000; |aᵢ|, |x| ≤ 10⁹.",
    "samples": [
      {
        "input": "5 4\n1 4 7 10 13\n5\n9\n12\n2",
        "output": "4\n10\n13\n1"
      }
    ],
    "tests": [
      {
        "input": "5 4\n1 4 7 10 13\n5\n9\n12\n2",
        "output": "4\n10\n13\n1"
      },
      {
        "input": "2 3\n3 5\n4\n3\n6",
        "output": "3\n3\n5"
      },
      {
        "input": "3 3\n-8 -3 6\n-6\n-1\n3",
        "output": "-8\n-3\n6"
      },
      {
        "input": "0 2\n\n5\n-5",
        "output": "EMPTY\nEMPTY"
      }
    ]
  }
];
