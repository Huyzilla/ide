
 // Day 19 — Cửa sổ trượt
// 2 bài chính + 2 bài bonus. Mỗi bài có samples và ít nhất 4 tests.

export default [
  {
    "id": "day19-01",
    "day": 19,
    "title": "Tổng lớn nhất của cửa sổ độ dài k",
    "description": "Cho dãy n số nguyên (có thể âm) và số nguyên k. Xét tất cả đoạn liên tiếp gồm đúng k phần tử. Hãy tìm tổng lớn nhất trong các đoạn đó. Dùng cửa sổ trượt: tính tổng k phần tử đầu, sau đó bỏ phần tử bên trái và thêm phần tử bên phải khi dịch cửa sổ.",
    "inputDescription": "Dòng 1: n k. Dòng 2: n số nguyên a[1], a[2], ..., a[n].",
    "outputDescription": "In một số nguyên là tổng lớn nhất của đoạn liên tiếp độ dài đúng k.",
    "constraints": "1 ≤ k ≤ n ≤ 200000; |a[i]| ≤ 10^9; kết quả nằm trong phạm vi số nguyên 64 bit.",
    "samples": [
      {
        "input": "5 3\n3 -1 4 -2 5",
        "output": "7"
      }
    ],
    "tests": [
      {
        "input": "5 3\n3 -1 4 -2 5",
        "output": "7"
      },
      {
        "input": "1 1\n-7",
        "output": "-7"
      },
      {
        "input": "5 5\n-2 -3 -1 -4 -5",
        "output": "-15"
      },
      {
        "input": "6 2\n-5 -2 -3 -1 -9 -4",
        "output": "-4"
      },
      {
        "input": "5 3\n1000000000 1000000000 1000000000 1000000000 1000000000",
        "output": "3000000000"
      }
    ]
  },
  {
    "id": "day19-02",
    "day": 19,
    "title": "Đoạn ngắn nhất có tổng ít nhất S",
    "description": "Cho dãy gồm n số nguyên dương và ngưỡng S. Tìm độ dài nhỏ nhất của đoạn liên tiếp có tổng ≥ S. Nếu không tồn tại, in 0. Dùng hai đầu cửa sổ: tăng đầu phải để đạt ngưỡng, sau đó tăng đầu trái khi tổng vẫn đạt ngưỡng để tìm đoạn ngắn hơn. Lưu ý: cách thu hẹp cửa sổ này dựa trên giả thiết mọi phần tử đều dương.",
    "inputDescription": "Dòng 1: n S. Dòng 2: n số nguyên dương a[1], a[2], ..., a[n].",
    "outputDescription": "In độ dài đoạn ngắn nhất có tổng ít nhất S; in 0 nếu không có đoạn nào thỏa mãn.",
    "constraints": "1 ≤ n ≤ 200000; 1 ≤ S ≤ 10^18; 1 ≤ a[i] ≤ 10^9; dùng số nguyên 64 bit để tính tổng.",
    "samples": [
      {
        "input": "6 7\n2 3 1 2 4 3",
        "output": "2"
      }
    ],
    "tests": [
      {
        "input": "6 7\n2 3 1 2 4 3",
        "output": "2"
      },
      {
        "input": "1 9\n9",
        "output": "1"
      },
      {
        "input": "5 16\n1 2 3 4 5",
        "output": "0"
      },
      {
        "input": "5 3\n1 1 3 1 1",
        "output": "1"
      },
      {
        "input": "7 11\n1 2 3 4 5 1 2",
        "output": "3"
      }
    ]
  },
  {
    "id": "day19-03",
    "day": 19,
    "title": "BONUS — Đoạn dài nhất có không quá k giá trị phân biệt",
    "description": "Cho dãy n số nguyên và k. Tìm độ dài lớn nhất của một đoạn liên tiếp chứa không quá k giá trị khác nhau. Dùng cửa sổ trượt kết hợp bảng tần suất (map hoặc unordered_map): thêm phần tử bên phải; nếu có hơn k giá trị phân biệt, thu hẹp bên trái đến khi hợp lệ.",
    "inputDescription": "Dòng 1: n k. Dòng 2: n số nguyên a[1], a[2], ..., a[n].",
    "outputDescription": "In độ dài lớn nhất của đoạn liên tiếp chứa không quá k giá trị phân biệt.",
    "constraints": "1 ≤ k ≤ n ≤ 200000; |a[i]| ≤ 10^9.",
    "samples": [
      {
        "input": "8 2\n1 2 1 3 4 3 3 2",
        "output": "4"
      }
    ],
    "tests": [
      {
        "input": "8 2\n1 2 1 3 4 3 3 2",
        "output": "4"
      },
      {
        "input": "7 1\n5 5 2 2 2 5 5",
        "output": "3"
      },
      {
        "input": "6 3\n1 2 3 1 2 3",
        "output": "6"
      },
      {
        "input": "5 2\n1 2 3 4 5",
        "output": "2"
      },
      {
        "input": "8 2\n1 1 2 2 3 3 3 2",
        "output": "6"
      }
    ]
  },
  {
    "id": "day19-04",
    "day": 19,
    "title": "BONUS — Đếm đoạn con có không quá k giá trị phân biệt",
    "description": "Cho dãy n số nguyên và k. Đếm số đoạn con liên tiếp không rỗng chứa không quá k giá trị phân biệt. Dùng cửa sổ trượt cùng bảng tần suất. Với mỗi đầu phải r, sau khi thu hẹp để cửa sổ [l,r] hợp lệ, có đúng r-l+1 đoạn con hợp lệ kết thúc tại r. Cộng số lượng đó vào đáp án.",
    "inputDescription": "Dòng 1: n k. Dòng 2: n số nguyên a[1], a[2], ..., a[n].",
    "outputDescription": "In số lượng đoạn con liên tiếp không rỗng có không quá k giá trị phân biệt.",
    "constraints": "1 ≤ k ≤ n ≤ 200000; |a[i]| ≤ 10^9; đáp án có thể vượt số nguyên 32 bit, hãy dùng số nguyên 64 bit.",
    "samples": [
      {
        "input": "5 2\n1 2 1 2 3",
        "output": "12"
      }
    ],
    "tests": [
      {
        "input": "5 2\n1 2 1 2 3",
        "output": "12"
      },
      {
        "input": "1 1\n7",
        "output": "1"
      },
      {
        "input": "4 1\n1 1 1 1",
        "output": "10"
      },
      {
        "input": "4 1\n1 2 3 4",
        "output": "4"
      },
      {
        "input": "5 2\n-1 -1 2 2 -1",
        "output": "15"
      }
    ]
  }
];
