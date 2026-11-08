
 // Day 23 — Số học mô-đun và tổ hợp
// 3 bài chính + 1 bài bonus.
// Mỗi bài có samples và ít nhất 4 tests.

export default [
  {
    "id": "day23-01",
    "day": 23,
    "title": "Tổng và tích lấy dư",
    "description": "Cho n số nguyên không âm a[1], a[2], ..., a[n] và số nguyên dương M. Hãy tính hai giá trị: tổng của tất cả phần tử lấy dư cho M và tích của tất cả phần tử lấy dư cho M. Do các số có thể rất lớn, cần thực hiện phép lấy dư trong quá trình tính toán để tránh tràn số.",
    "inputDescription": "Dòng 1: n M. Dòng 2: n số nguyên không âm a[1], a[2], ..., a[n].",
    "outputDescription": "In hai số nguyên trên một dòng: tổng lấy dư cho M và tích lấy dư cho M, cách nhau một dấu cách.",
    "constraints": "1 ≤ n ≤ 200000; 1 ≤ M ≤ 1000000007; 0 ≤ a[i] ≤ 10^18; sử dụng số nguyên 64 bit.",
    "samples": [
      {
        "input": "5 7\n3 5 9 2 4",
        "output": "2 2"
      }
    ],
    "tests": [
      {
        "input": "5 7\n3 5 9 2 4",
        "output": "2 2"
      },
      {
        "input": "3 1\n0 7 123456789",
        "output": "0 0"
      },
      {
        "input": "4 11\n0 7 13 22",
        "output": "9 0"
      },
      {
        "input": "3 1000000007\n1000000000000000000 1000000000000000000 1000000000000000000",
        "output": "147 117649"
      },
      {
        "input": "1 97\n1",
        "output": "1 1"
      },
      {
        "input": "5 100\n25 4 12 7 3",
        "output": "51 0"
      }
    ]
  },
  {
    "id": "day23-02",
    "day": 23,
    "title": "Tính số tổ hợp",
    "description": "Cho q truy vấn, mỗi truy vấn gồm hai số nguyên n và k. Hãy tính số cách chọn k phần tử từ n phần tử phân biệt mà không quan tâm đến thứ tự. Giá trị này được ký hiệu là C(n,k). Quy ước C(n,0) = C(n,n) = 1 và C(n,k) = C(n-1,k-1) + C(n-1,k) khi 0 < k < n. Hãy sử dụng quy luật của tam giác Pascal để trả lời các truy vấn hiệu quả.",
    "inputDescription": "Dòng 1: số nguyên q. q dòng tiếp theo, mỗi dòng chứa hai số nguyên n k.",
    "outputDescription": "Với mỗi truy vấn, in giá trị C(n,k) chính xác trên một dòng. Không lấy dư.",
    "constraints": "1 ≤ q ≤ 100000; 0 ≤ k ≤ n ≤ 60; mọi kết quả nằm trong phạm vi số nguyên 64 bit.",
    "samples": [
      {
        "input": "4\n0 0\n5 2\n6 3\n10 0",
        "output": "1\n10\n20\n1"
      }
    ],
    "tests": [
      {
        "input": "4\n0 0\n5 2\n6 3\n10 0",
        "output": "1\n10\n20\n1"
      },
      {
        "input": "3\n1 0\n1 1\n2 1",
        "output": "1\n1\n2"
      },
      {
        "input": "3\n10 3\n10 7\n10 10",
        "output": "120\n120\n1"
      },
      {
        "input": "3\n50 25\n60 1\n60 59",
        "output": "126410606437752\n60\n60"
      },
      {
        "input": "3\n60 60\n59 0\n4 2",
        "output": "1\n1\n6"
      },
      {
        "input": "3\n60 30\n20 10\n30 15",
        "output": "118264581564861424\n184756\n155117520"
      }
    ]
  },
  {
    "id": "day23-03",
    "day": 23,
    "title": "Đếm đường đi ngắn nhất trên lưới",
    "description": "Cho một bảng ô vuông gồm n hàng và m cột. Một robot bắt đầu tại ô (1,1) và cần đi đến ô (n,m). Trong mỗi bước, robot chỉ được đi sang phải một ô hoặc đi xuống một ô. Tất cả các ô đều có thể đi qua. Hãy đếm số đường đi khác nhau từ ô bắt đầu đến ô đích. Hai đường đi được coi là khác nhau nếu có ít nhất một bước di chuyển khác nhau. Có q bộ dữ liệu cần xử lý.",
    "inputDescription": "Dòng 1: số nguyên q. q dòng tiếp theo, mỗi dòng gồm hai số nguyên n m.",
    "outputDescription": "Với mỗi bộ dữ liệu, in số đường đi khác nhau từ ô (1,1) đến ô (n,m) trên một dòng.",
    "constraints": "1 ≤ q ≤ 100000; 1 ≤ n,m ≤ 30; kết quả nằm trong phạm vi số nguyên 64 bit.",
    "samples": [
      {
        "input": "4\n1 1\n2 3\n3 4\n4 4",
        "output": "1\n3\n10\n20"
      }
    ],
    "tests": [
      {
        "input": "4\n1 1\n2 3\n3 4\n4 4",
        "output": "1\n3\n10\n20"
      },
      {
        "input": "3\n1 7\n7 1\n2 2",
        "output": "1\n1\n2"
      },
      {
        "input": "3\n2 30\n30 2\n1 1",
        "output": "30\n30\n1"
      },
      {
        "input": "3\n5 5\n4 7\n10 10",
        "output": "70\n84\n48620"
      },
      {
        "input": "3\n30 30\n3 30\n30 3",
        "output": "30067266499541040\n465\n465"
      },
      {
        "input": "4\n2 2\n2 4\n3 3\n1 10",
        "output": "2\n4\n6\n1"
      }
    ]
  },
  {
    "id": "day23-04",
    "day": 23,
    "title": "BONUS — Xếp đèn không kề nhau",
    "description": "Có n vị trí được đánh số từ 1 đến n trên một hàng thẳng. Cần đặt đúng k bóng đèn vào k vị trí khác nhau sao cho không có hai bóng đèn nào nằm ở hai vị trí liên tiếp. Mỗi vị trí chỉ được đặt tối đa một bóng đèn. Hãy đếm số cách đặt đèn hợp lệ. Hai cách được coi là khác nhau nếu tồn tại một vị trí có đèn ở cách này nhưng không có đèn ở cách kia. Vì đáp án có thể rất lớn, hãy in kết quả lấy dư cho 1000000007. Nếu k = 0, có đúng một cách là không đặt bóng đèn nào.",
    "inputDescription": "Dòng 1: số nguyên q. q dòng tiếp theo, mỗi dòng gồm hai số nguyên n k.",
    "outputDescription": "Với mỗi truy vấn, in số cách đặt đúng k bóng đèn sao cho không có hai bóng đèn kề nhau, lấy dư cho 1000000007. Nếu không có cách hợp lệ, in 0.",
    "constraints": "1 ≤ q ≤ 100000; 1 ≤ n ≤ 2000; 0 ≤ k ≤ n; M = 1000000007.",
    "samples": [
      {
        "input": "6\n5 2\n4 3\n6 3\n3 0\n1 1\n10 4",
        "output": "6\n0\n4\n1\n1\n35"
      }
    ],
    "tests": [
      {
        "input": "6\n5 2\n4 3\n6 3\n3 0\n1 1\n10 4",
        "output": "6\n0\n4\n1\n1\n35"
      },
      {
        "input": "4\n1 0\n1 1\n2 1\n2 2",
        "output": "1\n1\n2\n0"
      },
      {
        "input": "4\n7 4\n8 4\n5 3\n10 0",
        "output": "1\n5\n0\n1"
      },
      {
        "input": "3\n2000 1\n2000 0\n2000 2000",
        "output": "2000\n1\n0"
      },
      {
        "input": "4\n10 5\n9 5\n11 6\n20 2",
        "output": "6\n1\n1\n171"
      },
      {
        "input": "4\n3 1\n3 2\n4 2\n5 1",
        "output": "3\n1\n3\n5"
      }
    ]
  }
];
