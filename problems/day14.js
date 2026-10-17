// Day 14 — Số nguyên lớn: nhân và chia nhỏ
// 2 bài chính + 2 bài bonus. Mỗi bài có samples và ít nhất 4 tests.

export default [
  {
    "id": "day14-01",
    "day": 14,
    "title": "Nhân số nguyên lớn với số nhỏ",
    "description": "Cho số nguyên không âm A rất lớn ở dạng chuỗi và số nguyên không âm k. Hãy tính A × k bằng cách nhân từng chữ số từ phải sang trái và xử lý nhớ. Không chuyển toàn bộ A sang kiểu số nguyên có sẵn.",
    "inputDescription": "Dòng 1: A. Dòng 2: số nguyên k.",
    "outputDescription": "In tích A × k, không có số 0 thừa ở đầu (trừ kết quả 0).",
    "constraints": "1 ≤ |A| ≤ 2000; 0 ≤ k ≤ 10⁹; A chỉ gồm chữ số 0–9 và có thể có số 0 đầu.",
    "samples": [
      {
        "input": "12345678901234567890\n7",
        "output": "86419752308641975230"
      }
    ],
    "tests": [
      {
        "input": "12345678901234567890\n7",
        "output": "86419752308641975230"
      },
      {
        "input": "0\n1000000000",
        "output": "0"
      },
      {
        "input": "0000012345\n0",
        "output": "0"
      },
      {
        "input": "999999999999999999999999\n9",
        "output": "8999999999999999999999991"
      },
      {
        "input": "1000000000000000000000000\n1000000000",
        "output": "1000000000000000000000000000000000"
      },
      {
        "input": "00000000000005\n12",
        "output": "60"
      }
    ]
  },
  {
    "id": "day14-02",
    "day": 14,
    "title": "Chia số nguyên lớn cho số nhỏ",
    "description": "Cho số nguyên không âm A rất lớn ở dạng chuỗi và số nguyên dương k. Hãy thực hiện phép chia dài từ trái sang phải để tìm thương Q và số dư R sao cho A = Q × k + R và 0 ≤ R < k. Không chuyển toàn bộ A sang kiểu số nguyên có sẵn.",
    "inputDescription": "Dòng 1: A. Dòng 2: số nguyên dương k.",
    "outputDescription": "In Q và R trên một dòng, cách nhau bởi dấu cách. Thương không có số 0 thừa ở đầu (trừ thương bằng 0).",
    "constraints": "1 ≤ |A| ≤ 2000; 1 ≤ k ≤ 10⁹; A chỉ gồm chữ số 0–9 và có thể có số 0 đầu.",
    "samples": [
      {
        "input": "12345678901234567890\n7",
        "output": "1763668414462081127 1"
      }
    ],
    "tests": [
      {
        "input": "12345678901234567890\n7",
        "output": "1763668414462081127 1"
      },
      {
        "input": "0\n5",
        "output": "0 0"
      },
      {
        "input": "000010\n3",
        "output": "3 1"
      },
      {
        "input": "4\n7",
        "output": "0 4"
      },
      {
        "input": "1000000000000000000000\n10",
        "output": "100000000000000000000 0"
      },
      {
        "input": "999999999999999999999999999999\n999999937",
        "output": "1000000063000003969000 250046999"
      }
    ]
  },
  {
    "id": "day14-03",
    "day": 14,
    "title": "BONUS — Tính A × k + B",
    "description": "Cho hai số nguyên không âm rất lớn A và B ở dạng chuỗi cùng số nguyên không âm k. Hãy tính A × k + B. Kết hợp phép nhân số lớn với số nhỏ của Day 14 và phép cộng hai số lớn của Day 13; không dùng thư viện big integer.",
    "inputDescription": "Dòng 1: A. Dòng 2: k. Dòng 3: B.",
    "outputDescription": "In kết quả A × k + B ở dạng thập phân, không có số 0 thừa ở đầu (trừ kết quả 0).",
    "constraints": "1 ≤ |A|, |B| ≤ 2000; 0 ≤ k ≤ 10⁹; A, B chỉ gồm chữ số 0–9.",
    "samples": [
      {
        "input": "12345678901234567890\n7\n98765432109876543210",
        "output": "185185184418518518440"
      }
    ],
    "tests": [
      {
        "input": "12345678901234567890\n7\n98765432109876543210",
        "output": "185185184418518518440"
      },
      {
        "input": "0\n0\n0",
        "output": "0"
      },
      {
        "input": "99999999999999999999999\n9\n1",
        "output": "899999999999999999999992"
      },
      {
        "input": "00005\n12\n0007",
        "output": "67"
      },
      {
        "input": "123456789\n0\n123456789",
        "output": "123456789"
      },
      {
        "input": "1\n1000000000\n999999999999999999999",
        "output": "1000000000000999999999"
      }
    ]
  },
  {
    "id": "day14-04",
    "day": 14,
    "title": "BONUS — Nhân hai số nguyên lớn",
    "description": "Cho hai số nguyên không âm A và B ở dạng chuỗi. Hãy tự cài đặt phép nhân hai số lớn theo cách đặt tính nhân từng chữ số, cộng dồn vào các vị trí tương ứng và xử lý nhớ. Không dùng kiểu số nguyên có sẵn hay thư viện big integer cho toàn bộ số.",
    "inputDescription": "Dòng 1: A. Dòng 2: B.",
    "outputDescription": "In tích A × B ở dạng thập phân, không có số 0 thừa ở đầu (trừ kết quả 0).",
    "constraints": "1 ≤ |A|, |B| ≤ 200; A, B chỉ gồm chữ số 0–9; độ phức tạp O(|A| × |B|) được chấp nhận.",
    "samples": [
      {
        "input": "123456789123456789\n987654321987654321",
        "output": "121932631356500531347203169112635269"
      }
    ],
    "tests": [
      {
        "input": "123456789123456789\n987654321987654321",
        "output": "121932631356500531347203169112635269"
      },
      {
        "input": "0\n99999999999999",
        "output": "0"
      },
      {
        "input": "00012\n00003",
        "output": "36"
      },
      {
        "input": "9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999",
        "output": "99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999980000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001"
      },
      {
        "input": "1\n999999999999999999999999999999",
        "output": "999999999999999999999999999999"
      },
      {
        "input": "9999999999\n9999999999",
        "output": "99999999980000000001"
      }
    ]
  }
];
