// Day 15 — Mảng cộng dồn 1 chiều
// 2 bài chính + 2 bài bonus. Mỗi bài có samples và ít nhất 4 tests.

export default [
  {
    "id": "day15-01",
    "day": 15,
    "title": "Tổng đoạn con với mảng cộng dồn",
    "description": "Cho dãy n số nguyên và q truy vấn, mỗi truy vấn gồm l, r (đánh số từ 1). Hãy tính tổng các phần tử từ vị trí l đến r. Dùng mảng cộng dồn để trả lời mỗi truy vấn trong O(1).",
    "inputDescription": "Dòng 1: n q. Dòng 2: n số nguyên. q dòng tiếp theo: mỗi dòng gồm l r.",
    "outputDescription": "Với mỗi truy vấn, in tổng đoạn [l,r] trên một dòng.",
    "constraints": "1 ≤ n,q ≤ 200000; -10^9 ≤ a[i] ≤ 10^9; 1 ≤ l ≤ r ≤ n; tổng nằm trong phạm vi số nguyên 64 bit.",
    "samples": [
      {
        "input": "5 3\n2 -1 4 3 5\n1 3\n2 5\n4 4",
        "output": "5\n11\n3"
      }
    ],
    "tests": [
      {
        "input": "5 3\n2 -1 4 3 5\n1 3\n2 5\n4 4",
        "output": "5\n11\n3"
      },
      {
        "input": "1 3\n7\n1 1\n1 1\n1 1",
        "output": "7\n7\n7"
      },
      {
        "input": "4 2\n-5 -2 -8 -1\n1 4\n2 3",
        "output": "-16\n-10"
      },
      {
        "input": "6 3\n1000000000 1000000000 1000000000 1000000000 1000000000 1000000000\n1 6\n2 5\n3 3",
        "output": "6000000000\n4000000000\n1000000000"
      },
      {
        "input": "7 4\n3 0 -3 8 -2 5 1\n1 7\n1 2\n3 6\n6 7",
        "output": "12\n3\n8\n6"
      }
    ]
  },
  {
    "id": "day15-02",
    "day": 15,
    "title": "Đếm số dương trong đoạn",
    "description": "Cho dãy n số nguyên và q truy vấn [l,r]. Với mỗi truy vấn, hãy đếm có bao nhiêu phần tử dương trong đoạn. Tạo mảng cộng dồn đánh dấu phần tử dương (1 nếu dương, ngược lại 0).",
    "inputDescription": "Dòng 1: n q. Dòng 2: n số nguyên. q dòng tiếp theo: mỗi dòng gồm l r.",
    "outputDescription": "Với mỗi truy vấn, in số phần tử dương trong đoạn trên một dòng.",
    "constraints": "1 ≤ n,q ≤ 200000; -10^9 ≤ a[i] ≤ 10^9; 1 ≤ l ≤ r ≤ n.",
    "samples": [
      {
        "input": "6 3\n-1 2 0 5 -3 4\n1 6\n2 4\n3 5",
        "output": "3\n2\n1"
      }
    ],
    "tests": [
      {
        "input": "6 3\n-1 2 0 5 -3 4\n1 6\n2 4\n3 5",
        "output": "3\n2\n1"
      },
      {
        "input": "4 2\n0 0 0 0\n1 4\n2 3",
        "output": "0\n0"
      },
      {
        "input": "5 3\n1 2 3 4 5\n1 5\n2 2\n3 5",
        "output": "5\n1\n3"
      },
      {
        "input": "5 3\n-1 -2 -3 -4 -5\n1 5\n2 4\n5 5",
        "output": "0\n0\n0"
      },
      {
        "input": "8 4\n0 7 -2 9 0 -1 3 0\n1 8\n2 5\n5 8\n6 7",
        "output": "3\n2\n1\n1"
      }
    ]
  },
  {
    "id": "day15-03",
    "day": 15,
    "title": "BONUS — Tổng đoạn chia hết cho k",
    "description": "Cho dãy n số nguyên và q truy vấn [l,r,k]. Với mỗi truy vấn, tính tổng các phần tử trong đoạn [l,r] chia hết cho k. Tiền xử lý nhiều mảng cộng dồn theo k (1 ≤ k ≤ 10) hoặc chọn cách phù hợp với giới hạn.",
    "inputDescription": "Dòng 1: n q. Dòng 2: n số nguyên. q dòng tiếp theo: mỗi dòng gồm l r k.",
    "outputDescription": "Với mỗi truy vấn, in tổng các phần tử chia hết cho k trong đoạn.",
    "constraints": "1 ≤ n,q ≤ 200000; 1 ≤ k ≤ 10; -10^9 ≤ a[i] ≤ 10^9; tổng nằm trong phạm vi số nguyên 64 bit.",
    "samples": [
      {
        "input": "6 3\n2 3 4 6 5 8\n1 6 2\n2 5 3\n3 6 4",
        "output": "20\n9\n12"
      }
    ],
    "tests": [
      {
        "input": "6 3\n2 3 4 6 5 8\n1 6 2\n2 5 3\n3 6 4",
        "output": "20\n9\n12"
      },
      {
        "input": "5 2\n-6 -3 0 4 9\n1 5 3\n2 4 2",
        "output": "0\n4"
      },
      {
        "input": "4 3\n7 14 21 28\n1 4 7\n2 3 14\n1 1 2",
        "output": "70\n14\n0"
      },
      {
        "input": "1 2\n-10\n1 1 5\n1 1 3",
        "output": "-10\n0"
      },
      {
        "input": "7 3\n5 10 15 20 25 30 35\n2 6 10\n1 7 5\n3 5 7",
        "output": "60\n140\n0"
      }
    ]
  },
  {
    "id": "day15-04",
    "day": 15,
    "title": "BONUS — Nhiều truy vấn tổng theo giá trị",
    "description": "Cho n giá trị nguyên không âm, mỗi giá trị không vượt quá M. Với mỗi truy vấn x y, hãy tính tổng các giá trị nằm trong đoạn giá trị [x,y]. Dùng mảng cộng dồn tần suất hoặc tổng theo miền giá trị để trả lời nhanh.",
    "inputDescription": "Dòng 1: n M q. Dòng 2: n số nguyên. q dòng tiếp theo: mỗi dòng gồm x y.",
    "outputDescription": "Với mỗi truy vấn, in tổng các phần tử có giá trị thuộc [x,y].",
    "constraints": "1 ≤ n,q ≤ 200000; 0 ≤ a[i],x,y ≤ M ≤ 200000; x ≤ y.",
    "samples": [
      {
        "input": "6 10 3\n1 3 3 7 10 0\n0 3\n4 9\n10 10",
        "output": "7\n7\n10"
      }
    ],
    "tests": [
      {
        "input": "6 10 3\n1 3 3 7 10 0\n0 3\n4 9\n10 10",
        "output": "7\n7\n10"
      },
      {
        "input": "4 5 2\n0 0 0 5\n0 0\n1 4",
        "output": "0\n0"
      },
      {
        "input": "5 5 3\n1 2 3 4 5\n1 5\n2 4\n5 5",
        "output": "15\n9\n5"
      },
      {
        "input": "3 100 2\n100 50 75\n60 80\n0 100",
        "output": "75\n225"
      },
      {
        "input": "7 8 3\n2 2 2 4 4 8 1\n2 2\n3 8\n0 1",
        "output": "6\n16\n1"
      }
    ]
  }
];