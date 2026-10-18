// Day 16 — Mảng hiệu
// 2 bài chính + 2 bài bonus. Mỗi bài có samples và ít nhất 4 tests.

export default [
  {
    "id": "day16-01",
    "day": 16,
    "title": "Cộng thêm trên nhiều đoạn",
    "description": "Ban đầu có n phần tử bằng 0. Thực hiện q thao tác, mỗi thao tác cộng giá trị v vào mọi phần tử trong đoạn [l,r]. Hãy in mảng cuối cùng. Dùng mảng hiệu: cộng v tại l, trừ v tại r+1, rồi tính cộng dồn.",
    "inputDescription": "Dòng 1: n q. q dòng tiếp theo: mỗi dòng gồm l r v.",
    "outputDescription": "In n số của mảng sau khi thực hiện tất cả thao tác.",
    "constraints": "1 ≤ n,q ≤ 200000; 1 ≤ l ≤ r ≤ n; -10^9 ≤ v ≤ 10^9; mọi giá trị cuối cùng nằm trong phạm vi số nguyên 64 bit.",
    "samples": [
      {
        "input": "5 3\n1 3 2\n2 5 1\n4 4 -2",
        "output": "2 3 3 -1 1"
      }
    ],
    "tests": [
      {
        "input": "5 3\n1 3 2\n2 5 1\n4 4 -2",
        "output": "2 3 3 -1 1"
      },
      {
        "input": "4 0",
        "output": "0 0 0 0"
      },
      {
        "input": "1 2\n1 1 5\n1 1 -2",
        "output": "3"
      },
      {
        "input": "6 2\n1 6 7\n3 5 -10",
        "output": "7 7 -3 -3 -3 7"
      },
      {
        "input": "5 3\n2 4 3\n1 2 -1\n4 5 2",
        "output": "-1 2 3 5 2"
      }
    ]
  },
  {
    "id": "day16-02",
    "day": 16,
    "title": "Cộng trên đoạn, lấy tổng truy vấn",
    "description": "Ban đầu có n phần tử bằng 0. Có q thao tác cộng v trên đoạn [l,r], sau đó có t truy vấn tổng đoạn [x,y]. Dùng mảng hiệu để dựng mảng sau cập nhật và mảng cộng dồn để trả lời truy vấn.",
    "inputDescription": "Dòng 1: n q t. q dòng tiếp theo: l r v. t dòng cuối: x y.",
    "outputDescription": "Với mỗi truy vấn, in tổng đoạn tương ứng trên một dòng.",
    "constraints": "1 ≤ n,q,t ≤ 200000; các đoạn nằm trong [1,n]; |v| ≤ 10^9; tổng nằm trong phạm vi số nguyên 64 bit.",
    "samples": [
      {
        "input": "5 2 3\n1 3 4\n2 5 -1\n1 5\n2 3\n4 5",
        "output": "7\n6\n-2"
      }
    ],
    "tests": [
      {
        "input": "5 2 3\n1 3 4\n2 5 -1\n1 5\n2 3\n4 5",
        "output": "7\n6\n-2"
      },
      {
        "input": "3 0 2\n1 3\n2 2",
        "output": "0\n0"
      },
      {
        "input": "4 1 3\n2 3 5\n1 4\n2 3\n4 4",
        "output": "10\n10\n0"
      },
      {
        "input": "6 3 3\n1 6 2\n2 5 3\n3 4 -10\n1 6\n2 5\n3 4",
        "output": "2\n-8\n-10"
      },
      {
        "input": "5 2 2\n1 2 -3\n4 5 7\n1 3\n3 5",
        "output": "-6\n14"
      }
    ]
  },
  {
    "id": "day16-03",
    "day": 16,
    "title": "BONUS — Lịch công việc và tổng công suất",
    "description": "Có n ngày, ban đầu mỗi ngày có tải công việc bằng 0. Mỗi kế hoạch [l,r,v] làm tải mỗi ngày trong đoạn tăng v. Sau các kế hoạch, trả lời tổng tải trong từng khoảng ngày được hỏi. Hãy kết hợp mảng hiệu và mảng cộng dồn.",
    "inputDescription": "Dòng 1: n q t. q dòng kế hoạch: l r v. t dòng truy vấn: x y.",
    "outputDescription": "In tổng tải cho mỗi truy vấn trên một dòng.",
    "constraints": "1 ≤ n,q,t ≤ 200000; 1 ≤ l ≤ r ≤ n; |v| ≤ 10^9; tổng nằm trong phạm vi số nguyên 64 bit.",
    "samples": [
      {
        "input": "7 3 3\n1 4 2\n3 7 1\n5 5 4\n1 7\n3 5\n6 7",
        "output": "21\n14\n2"
      }
    ],
    "tests": [
      {
        "input": "7 3 3\n1 4 2\n3 7 1\n5 5 4\n1 7\n3 5\n6 7",
        "output": "21\n14\n2"
      },
      {
        "input": "1 1 2\n1 1 9\n1 1\n1 1",
        "output": "9\n9"
      },
      {
        "input": "5 2 2\n1 5 3\n2 4 -1\n1 5\n2 4",
        "output": "13\n6"
      },
      {
        "input": "4 0 2\n1 4\n2 3",
        "output": "0\n0"
      },
      {
        "input": "6 3 3\n2 5 10\n1 3 -2\n4 6 -4\n1 6\n2 3\n4 5",
        "output": "16\n16\n12"
      }
    ]
  },
  {
    "id": "day16-04",
    "day": 16,
    "title": "BONUS — Khôi phục mảng từ tổng tiền tố",
    "description": "Cho n số tổng tiền tố P[1..n], trong đó P[i] = a[1] + ... + a[i]. Hãy khôi phục mảng a bằng hiệu giữa các tổng tiền tố liên tiếp. Quy ước P[0] = 0.",
    "inputDescription": "Dòng 1: n. Dòng 2: n số P[1], P[2], ..., P[n].",
    "outputDescription": "In n phần tử của mảng gốc trên một dòng.",
    "constraints": "1 ≤ n ≤ 200000; |P[i]| ≤ 10^18; các phần tử khôi phục nằm trong phạm vi số nguyên 64 bit.",
    "samples": [
      {
        "input": "5\n3 1 6 6 10",
        "output": "3 -2 5 0 4"
      }
    ],
    "tests": [
      {
        "input": "5\n3 1 6 6 10",
        "output": "3 -2 5 0 4"
      },
      {
        "input": "1\n0",
        "output": "0"
      },
      {
        "input": "4\n5 5 5 5",
        "output": "5 0 0 0"
      },
      {
        "input": "5\n-2 -5 0 7 1",
        "output": "-2 -3 5 7 -6"
      },
      {
        "input": "6\n1000000000000 999999999999 1000000000005 1000000000005 0 -1",
        "output": "1000000000000 -1 6 0 -1000000000005 -1"
      }
    ]
  }
];