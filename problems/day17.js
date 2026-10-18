// Day 17 — Hai con trỏ
// 2 bài chính + 2 bài bonus. Mỗi bài có samples và ít nhất 4 tests.

export default [
  {
    "id": "day17-01",
    "day": 17,
    "title": "Tìm cặp có tổng bằng x",
    "description": "Cho dãy tăng dần gồm n số nguyên và số x. Hãy tìm hai vị trí khác nhau có tổng phần tử bằng x bằng kỹ thuật hai con trỏ. Nếu có nhiều cặp, in cặp chỉ số có thứ tự từ điển nhỏ nhất; nếu không có, in -1. Đánh số vị trí từ 1.",
    "inputDescription": "Dòng 1: n x. Dòng 2: n số nguyên tăng dần.",
    "outputDescription": "In i j với i < j nếu tìm được cặp có tổng x; nếu không in -1.",
    "constraints": "1 ≤ n ≤ 200000; -10^9 ≤ a[i],x ≤ 10^9; dãy không giảm.",
    "samples": [
      {
        "input": "6 10\n1 2 4 6 8 9",
        "output": "1 6"
      }
    ],
    "tests": [
      {
        "input": "6 10\n1 2 4 6 8 9",
        "output": "1 6"
      },
      {
        "input": "4 20\n1 3 5 7",
        "output": "-1"
      },
      {
        "input": "5 8\n1 2 3 5 7",
        "output": "1 5"
      },
      {
        "input": "5 6\n1 2 3 3 5",
        "output": "1 5"
      },
      {
        "input": "2 0\n-5 5",
        "output": "1 2"
      }
    ]
  },
  {
    "id": "day17-02",
    "day": 17,
    "title": "Gộp hai dãy đã sắp xếp",
    "description": "Cho hai dãy số nguyên không giảm. Hãy gộp chúng thành một dãy không giảm bằng hai con trỏ, giữ lại mọi phần tử trùng lặp.",
    "inputDescription": "Dòng 1: n m. Dòng 2: n phần tử của dãy thứ nhất. Dòng 3: m phần tử của dãy thứ hai. Dãy rỗng được biểu diễn bằng dòng trống.",
    "outputDescription": "In n+m phần tử sau khi gộp, cách nhau bởi dấu cách. Nếu cả hai dãy rỗng, in dòng trống.",
    "constraints": "0 ≤ n,m ≤ 200000; -10^9 ≤ phần tử ≤ 10^9; mỗi dãy đã được sắp xếp không giảm.",
    "samples": [
      {
        "input": "4 3\n1 3 3 8\n2 3 9",
        "output": "1 2 3 3 3 8 9"
      }
    ],
    "tests": [
      {
        "input": "4 3\n1 3 3 8\n2 3 9",
        "output": "1 2 3 3 3 8 9"
      },
      {
        "input": "0 0\n\n",
        "output": ""
      },
      {
        "input": "3 0\n-2 0 7\n",
        "output": "-2 0 7"
      },
      {
        "input": "0 4\n\n1 1 2 5",
        "output": "1 1 2 5"
      },
      {
        "input": "3 3\n-5 0 10\n-4 1 9",
        "output": "-5 -4 0 1 9 10"
      }
    ]
  },
  {
    "id": "day17-03",
    "day": 17,
    "title": "BONUS — Đếm cặp có tổng nhỏ hơn x",
    "description": "Cho dãy n số nguyên (chưa sắp xếp) và số x. Đếm số cặp chỉ số i < j sao cho a[i] + a[j] < x. Hãy sắp xếp dãy rồi dùng hai con trỏ; mỗi cặp chỉ số được tính một lần.",
    "inputDescription": "Dòng 1: n x. Dòng 2: n số nguyên.",
    "outputDescription": "In số cặp thỏa điều kiện.",
    "constraints": "1 ≤ n ≤ 200000; -10^9 ≤ a[i],x ≤ 10^9; đáp án nằm trong số nguyên 64 bit.",
    "samples": [
      {
        "input": "5 7\n1 2 3 5 8",
        "output": "6"
      }
    ],
    "tests": [
      {
        "input": "5 7\n1 2 3 5 8",
        "output": "6"
      },
      {
        "input": "4 0\n-5 -2 1 4",
        "output": "2"
      },
      {
        "input": "5 100\n1 1 1 1 1",
        "output": "10"
      },
      {
        "input": "3 -10\n-5 -4 -3",
        "output": "0"
      },
      {
        "input": "6 5\n0 0 1 2 3 4",
        "output": "5"
      }
    ]
  },
  {
    "id": "day17-04",
    "day": 17,
    "title": "BONUS — Cặp có tổng gần x nhất",
    "description": "Cho dãy n số nguyên và số x, với n ≥ 2. Tìm giá trị nhỏ nhất của |a[i]+a[j]-x| với i < j. Sắp xếp dãy rồi dùng hai con trỏ. Nếu tổng bằng x có thể dừng sớm.",
    "inputDescription": "Dòng 1: n x. Dòng 2: n số nguyên.",
    "outputDescription": "In độ lệch nhỏ nhất không âm giữa tổng của một cặp và x.",
    "constraints": "2 ≤ n ≤ 200000; -10^9 ≤ a[i],x ≤ 10^9.",
    "samples": [
      {
        "input": "5 10\n-2 3 6 8 15",
        "output": "1"
      }
    ],
    "tests": [
      {
        "input": "5 10\n-2 3 6 8 15",
        "output": "1"
      },
      {
        "input": "2 5\n1 4",
        "output": "0"
      },
      {
        "input": "4 0\n-10 -3 2 8",
        "output": "1"
      },
      {
        "input": "3 100\n1 2 3",
        "output": "94"
      },
      {
        "input": "6 -5\n-10 -7 -4 0 5 9",
        "output": "0"
      }
    ]
  }
];