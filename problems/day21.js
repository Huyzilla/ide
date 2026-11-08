
 // Day 21 — Mảng 2 chiều, cộng dồn 2 chiều
// 2 bài chính + 2 bài bonus.
// Mỗi bài có samples và ít nhất 4 tests.

export default [
  {
    "id": "day21-01",
    "day": 21,
    "title": "Hàng có tổng lớn nhất",
    "description": "Cho ma trận gồm n hàng và m cột chứa các số nguyên (có thể âm). Hãy tìm hàng có tổng các phần tử lớn nhất. Nếu có nhiều hàng cùng đạt tổng lớn nhất, chọn hàng có chỉ số nhỏ nhất. Các hàng và cột được đánh số bắt đầu từ 1.",
    "inputDescription": "Dòng 1: n m. n dòng tiếp theo, mỗi dòng gồm m số nguyên của ma trận.",
    "outputDescription": "In hai số nguyên: chỉ số hàng có tổng lớn nhất và giá trị tổng của hàng đó.",
    "constraints": "1 ≤ n,m ≤ 1000; n*m ≤ 1000000; |a[i][j]| ≤ 10^9; sử dụng số nguyên 64 bit để tính tổng.",
    "samples": [
      {
        "input": "3 4\n1 -2 3 4\n5 0 -1 2\n-3 2 1 1",
        "output": "1 6"
      }
    ],
    "tests": [
      {
        "input": "3 4\n1 -2 3 4\n5 0 -1 2\n-3 2 1 1",
        "output": "1 6"
      },
      {
        "input": "1 3\n-5 -1 -2",
        "output": "1 -8"
      },
      {
        "input": "4 1\n-2\n7\n7\n0",
        "output": "2 7"
      },
      {
        "input": "3 3\n-4 -5 -6\n-1 -2 -3\n-7 -8 -9",
        "output": "2 -6"
      },
      {
        "input": "2 3\n1000000000 1000000000 1000000000\n-1000000000 -1000000000 -1000000000",
        "output": "1 3000000000"
      },
      {
        "input": "3 2\n1 2\n4 5\n6 1",
        "output": "2 9"
      }
    ]
  },
  {
    "id": "day21-02",
    "day": 21,
    "title": "Tổng nhiều hình chữ nhật trong ma trận",
    "description": "Cho ma trận n hàng, m cột chứa các số nguyên. Có q truy vấn, mỗi truy vấn cho bốn số x1, y1, x2, y2, yêu cầu tính tổng tất cả phần tử thuộc hình chữ nhật có góc trên bên trái (x1,y1) và góc dưới bên phải (x2,y2). Hãy trả lời các truy vấn một cách hiệu quả vì số lượng truy vấn có thể rất lớn.",
    "inputDescription": "Dòng 1: n m q. n dòng tiếp theo, mỗi dòng gồm m số nguyên của ma trận. q dòng cuối, mỗi dòng gồm x1 y1 x2 y2.",
    "outputDescription": "Với mỗi truy vấn, in tổng các phần tử trong hình chữ nhật tương ứng trên một dòng.",
    "constraints": "1 ≤ n,m ≤ 1000; n*m ≤ 1000000; 1 ≤ q ≤ 200000; 1 ≤ x1 ≤ x2 ≤ n; 1 ≤ y1 ≤ y2 ≤ m; |a[i][j]| ≤ 10^9; tổng nằm trong phạm vi số nguyên 64 bit.",
    "samples": [
      {
        "input": "3 4 4\n1 2 -3 4\n5 -6 7 8\n9 10 11 -12\n1 1 3 4\n1 2 2 3\n2 3 3 4\n3 1 3 3",
        "output": "36\n0\n14\n30"
      }
    ],
    "tests": [
      {
        "input": "3 4 4\n1 2 -3 4\n5 -6 7 8\n9 10 11 -12\n1 1 3 4\n1 2 2 3\n2 3 3 4\n3 1 3 3",
        "output": "36\n0\n14\n30"
      },
      {
        "input": "1 1 3\n-5\n1 1 1 1\n1 1 1 1\n1 1 1 1",
        "output": "-5\n-5\n-5"
      },
      {
        "input": "2 3 3\n1 2 3\n4 5 6\n1 2 2 3\n2 1 2 2\n1 1 1 3",
        "output": "16\n9\n6"
      },
      {
        "input": "4 1 2\n-1\n2\n-3\n4\n1 1 4 1\n2 1 3 1",
        "output": "2\n-1"
      },
      {
        "input": "2 2 2\n1000000000 1000000000\n1000000000 1000000000\n1 1 2 2\n2 2 2 2",
        "output": "4000000000\n1000000000"
      },
      {
        "input": "3 3 3\n-1 -2 -3\n-4 -5 -6\n-7 -8 -9\n1 1 3 3\n2 2 3 3\n1 3 1 3",
        "output": "-45\n-28\n-3"
      }
    ]
  },
  {
    "id": "day21-03",
    "day": 21,
    "title": "BONUS — Đếm hình vuông có tổng không vượt ngưỡng",
    "description": "Cho ma trận n hàng, m cột chứa các số nguyên và hai số k, S. Xét tất cả hình vuông con có kích thước đúng k hàng và k cột. Hãy đếm số hình vuông có tổng các phần tử không vượt quá S. Hai hình vuông ở vị trí khác nhau được tính riêng, kể cả khi chúng có các phần tử chung. Các phần tử có thể âm nên không được giả sử rằng mở rộng vùng luôn làm tổng tăng.",
    "inputDescription": "Dòng 1: n m k S. n dòng tiếp theo, mỗi dòng gồm m số nguyên của ma trận.",
    "outputDescription": "In một số nguyên là số lượng hình vuông con kích thước k*k có tổng không vượt quá S.",
    "constraints": "1 ≤ n,m ≤ 1000; n*m ≤ 1000000; 1 ≤ k ≤ min(n,m); |a[i][j]| ≤ 10^9; |S| ≤ 10^15; dùng số nguyên 64 bit để tính tổng.",
    "samples": [
      {
        "input": "3 4 2 18\n1 2 3 4\n5 6 7 8\n9 10 11 12",
        "output": "2"
      }
    ],
    "tests": [
      {
        "input": "3 4 2 18\n1 2 3 4\n5 6 7 8\n9 10 11 12",
        "output": "2"
      },
      {
        "input": "2 2 2 9\n1 2\n3 4",
        "output": "0"
      },
      {
        "input": "2 3 1 0\n-1 0 2\n3 -2 1",
        "output": "3"
      },
      {
        "input": "3 3 2 8\n1 1 1\n1 1 1\n1 1 1",
        "output": "4"
      },
      {
        "input": "3 4 2 -1\n-3 -3 5 5\n-3 -3 5 5\n-3 -3 5 5",
        "output": "2"
      },
      {
        "input": "1 5 1 5\n6 4 5 3 7",
        "output": "3"
      }
    ]
  },
  {
    "id": "day21-04",
    "day": 21,
    "title": "BONUS — Hình chữ nhật lớn nhất có tổng không vượt S",
    "description": "Cho ma trận n hàng, m cột gồm các số nguyên dương và một ngưỡng S. Hãy tìm hình chữ nhật con có diện tích lớn nhất sao cho tổng các phần tử bên trong không vượt quá S. Hình chữ nhật phải có các cạnh song song với cạnh ma trận. Diện tích bằng số hàng nhân số cột. Nếu không có hình chữ nhật không rỗng nào thỏa mãn, in 0. Có thể sử dụng tổng cộng dồn hai chiều để tính nhanh tổng của một vùng bất kỳ.",
    "inputDescription": "Dòng 1: n m S. n dòng tiếp theo, mỗi dòng gồm m số nguyên dương của ma trận.",
    "outputDescription": "In một số nguyên là diện tích lớn nhất của hình chữ nhật con có tổng không vượt quá S. In 0 nếu không tồn tại.",
    "constraints": "1 ≤ n,m ≤ 80; 1 ≤ a[i][j] ≤ 10^9; 0 ≤ S ≤ 10^15; tổng các phần tử nằm trong phạm vi số nguyên 64 bit.",
    "samples": [
      {
        "input": "3 4 11\n1 2 3 4\n2 1 2 3\n3 2 1 2",
        "output": "6"
      }
    ],
    "tests": [
      {
        "input": "3 4 11\n1 2 3 4\n2 1 2 3\n3 2 1 2",
        "output": "6"
      },
      {
        "input": "1 1 0\n5",
        "output": "0"
      },
      {
        "input": "2 3 6\n1 1 1\n1 1 1",
        "output": "6"
      },
      {
        "input": "3 3 10\n5 5 5\n5 5 5\n5 5 5",
        "output": "2"
      },
      {
        "input": "2 4 4\n1 1 10 1\n1 1 10 1",
        "output": "4"
      },
      {
        "input": "3 4 12\n2 2 2 2\n2 2 2 2\n2 2 2 2",
        "output": "6"
      }
    ]
  }
];
