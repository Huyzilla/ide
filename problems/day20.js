
 // Day 20 — Bài trộn kỹ thuật mảng
// 2 bài chính + 2 bài bonus.
// Học sinh tự nhận dạng kỹ thuật phù hợp.
// Mỗi bài có samples và ít nhất 4 tests.

export default [
  {
    "id": "day20-01",
    "day": 20,
    "title": "Báo cáo doanh thu theo khoảng ngày",
    "description": "Một cửa hàng ghi nhận doanh thu trong n ngày liên tiếp. Ngày thứ i có giá trị a[i], có thể âm nếu cửa hàng bị lỗ. Có q yêu cầu, mỗi yêu cầu cần tính tổng doanh thu từ ngày l đến ngày r (tính cả hai đầu). Hãy trả lời tất cả yêu cầu. Dữ liệu có thể rất lớn nên cần tìm cách xử lý hiệu quả.",
    "inputDescription": "Dòng 1: n q. Dòng 2: n số nguyên a[1], a[2], ..., a[n]. q dòng tiếp theo: mỗi dòng gồm hai số l r.",
    "outputDescription": "Với mỗi truy vấn, in tổng doanh thu trong đoạn [l,r] trên một dòng.",
    "constraints": "1 ≤ n,q ≤ 200000; 1 ≤ l ≤ r ≤ n; |a[i]| ≤ 10^9; tổng nằm trong phạm vi số nguyên 64 bit.",
    "samples": [
      {
        "input": "6 4\n5 -2 7 -3 4 1\n1 3\n2 5\n4 4\n1 6",
        "output": "10\n6\n-3\n12"
      }
    ],
    "tests": [
      {
        "input": "6 4\n5 -2 7 -3 4 1\n1 3\n2 5\n4 4\n1 6",
        "output": "10\n6\n-3\n12"
      },
      {
        "input": "1 3\n-10\n1 1\n1 1\n1 1",
        "output": "-10\n-10\n-10"
      },
      {
        "input": "5 2\n0 0 0 0 0\n1 5\n3 3",
        "output": "0\n0"
      },
      {
        "input": "4 3\n1000000000 1000000000 1000000000 1000000000\n1 4\n2 3\n4 4",
        "output": "4000000000\n2000000000\n1000000000"
      },
      {
        "input": "5 4\n-5 -4 -3 -2 -1\n1 5\n1 1\n2 4\n4 5",
        "output": "-15\n-5\n-9\n-3"
      }
    ]
  },
  {
    "id": "day20-02",
    "day": 20,
    "title": "Mức tải cao nhất sau điều chỉnh",
    "description": "Có n máy chủ, máy chủ thứ i ban đầu có mức tải a[i]. Người quản trị thực hiện q đợt điều chỉnh. Mỗi đợt gồm ba số l, r, v, nghĩa là tăng mức tải của tất cả máy chủ từ l đến r thêm v (v có thể âm). Sau khi thực hiện tất cả điều chỉnh, hãy tìm mức tải lớn nhất và số máy chủ có mức tải bằng giá trị lớn nhất đó.",
    "inputDescription": "Dòng 1: n q. Dòng 2: n số nguyên a[1], a[2], ..., a[n]. q dòng tiếp theo: mỗi dòng gồm l r v.",
    "outputDescription": "In hai số nguyên trên một dòng: mức tải lớn nhất và số máy chủ đạt mức tải đó.",
    "constraints": "1 ≤ n ≤ 200000; 0 ≤ q ≤ 200000; 1 ≤ l ≤ r ≤ n; |a[i]|, |v| ≤ 10^9; mức tải cuối cùng nằm trong phạm vi số nguyên 64 bit.",
    "samples": [
      {
        "input": "5 3\n2 1 3 0 -1\n1 3 2\n2 5 -1\n4 4 5",
        "output": "4 3"
      }
    ],
    "tests": [
      {
        "input": "5 3\n2 1 3 0 -1\n1 3 2\n2 5 -1\n4 4 5",
        "output": "4 3"
      },
      {
        "input": "4 0\n-4 -2 -9 -2",
        "output": "-2 2"
      },
      {
        "input": "1 3\n-100\n1 1 5\n1 1 20\n1 1 -3",
        "output": "-78 1"
      },
      {
        "input": "5 2\n0 0 0 0 0\n1 5 1000000000\n2 4 1000000000",
        "output": "2000000000 3"
      },
      {
        "input": "6 3\n5 5 5 5 5 5\n2 5 -10\n1 3 2\n4 6 2",
        "output": "7 2"
      }
    ]
  },
  {
    "id": "day20-03",
    "day": 20,
    "title": "BONUS — Cặp số gần tổng mục tiêu nhất",
    "description": "Cho n số nguyên và một số nguyên X. Hãy chọn đúng hai phần tử ở hai vị trí khác nhau sao cho tổng của chúng gần X nhất. Cụ thể, cần tìm giá trị nhỏ nhất của |a[i] + a[j] - X| với i < j. Dãy ban đầu chưa được sắp xếp và có thể chứa các giá trị trùng nhau.",
    "inputDescription": "Dòng 1: n X. Dòng 2: n số nguyên a[1], a[2], ..., a[n].",
    "outputDescription": "In một số nguyên là độ lệch tuyệt đối nhỏ nhất giữa tổng của hai phần tử và X.",
    "constraints": "2 ≤ n ≤ 200000; |a[i]| ≤ 10^9; |X| ≤ 10^12; sử dụng số nguyên 64 bit.",
    "samples": [
      {
        "input": "5 10\n1 4 7 12 -3",
        "output": "1"
      }
    ],
    "tests": [
      {
        "input": "5 10\n1 4 7 12 -3",
        "output": "1"
      },
      {
        "input": "2 0\n-5 4",
        "output": "1"
      },
      {
        "input": "4 10\n5 5 1 12",
        "output": "0"
      },
      {
        "input": "4 -9\n-8 -5 -4 -1",
        "output": "0"
      },
      {
        "input": "3 -1000000000000\n1000000000 -1000000000 0",
        "output": "999000000000"
      },
      {
        "input": "6 15\n20 8 1 3 3 9",
        "output": "2"
      }
    ]
  },
  {
    "id": "day20-04",
    "day": 20,
    "title": "BONUS — Đếm cặp có tổng không vượt ngưỡng",
    "description": "Cho n số nguyên và ngưỡng S. Hãy đếm số cặp vị trí (i,j) thỏa mãn i < j và a[i] + a[j] ≤ S. Hai phần tử có cùng giá trị nhưng nằm ở hai vị trí khác nhau vẫn được tính là một cặp hợp lệ. Vì số lượng cặp có thể rất lớn, cần tìm thuật toán hiệu quả hơn cách duyệt tất cả các cặp.",
    "inputDescription": "Dòng 1: n S. Dòng 2: n số nguyên a[1], a[2], ..., a[n].",
    "outputDescription": "In số lượng cặp vị trí (i,j) thỏa mãn i < j và a[i] + a[j] ≤ S.",
    "constraints": "2 ≤ n ≤ 200000; |a[i]| ≤ 10^9; |S| ≤ 10^12; đáp án có thể vượt số nguyên 32 bit, hãy dùng số nguyên 64 bit.",
    "samples": [
      {
        "input": "5 6\n1 2 3 4 5",
        "output": "6"
      }
    ],
    "tests": [
      {
        "input": "5 6\n1 2 3 4 5",
        "output": "6"
      },
      {
        "input": "4 0\n-2 -1 1 2",
        "output": "4"
      },
      {
        "input": "5 0\n3 3 3 3 3",
        "output": "0"
      },
      {
        "input": "5 10\n1 1 1 1 1",
        "output": "10"
      },
      {
        "input": "6 3\n-4 0 2 5 -1 3",
        "output": "10"
      }
    ]
  }
];
