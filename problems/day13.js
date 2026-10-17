// Day 13 — Số nguyên lớn: cộng và trừ
// 2 bài chính + 2 bài bonus. Mỗi bài có samples và ít nhất 4 tests.

export default [
  {
    "id": "day13-01",
    "day": 13,
    "title": "Cộng hai số nguyên lớn",
    "description": "Cho hai số nguyên không âm A và B có thể có hàng nghìn chữ số. Hãy tính A + B. Bắt buộc biểu diễn số bằng string và tự cài đặt phép cộng từng chữ số từ phải sang trái; không chuyển cả số sang kiểu dữ liệu số nguyên có sẵn.",
    "inputDescription": "Dòng 1: số nguyên không âm A. Dòng 2: số nguyên không âm B.",
    "outputDescription": "In tổng A + B ở dạng thập phân, không có số 0 thừa ở đầu (trừ kết quả 0).",
    "constraints": "1 ≤ |A|, |B| ≤ 2000; chỉ gồm chữ số 0–9, có thể có số 0 ở đầu.",
    "samples": [
      {
        "input": "99999999999999999999\n1",
        "output": "100000000000000000000"
      }
    ],
    "tests": [
      {
        "input": "99999999999999999999\n1",
        "output": "100000000000000000000"
      },
      {
        "input": "0\n0",
        "output": "0"
      },
      {
        "input": "00000000123\n00000000077",
        "output": "200"
      },
      {
        "input": "123456789012345678901234567890\n987654321098765432109876543210",
        "output": "1111111110111111111011111111100"
      },
      {
        "input": "0\n123456789012345678901234567890",
        "output": "123456789012345678901234567890"
      },
      {
        "input": "999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n1",
        "output": "1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
      }
    ]
  },
  {
    "id": "day13-02",
    "day": 13,
    "title": "Trừ hai số nguyên lớn không âm",
    "description": "Cho hai số nguyên không âm A và B, bảo đảm A ≥ B theo giá trị số học. Hãy tính A - B bằng phép trừ từng chữ số, xử lý việc mượn khi chữ số của A nhỏ hơn chữ số tương ứng của B. Không dùng kiểu số nguyên có sẵn để lưu toàn bộ A hoặc B.",
    "inputDescription": "Dòng 1: A. Dòng 2: B.",
    "outputDescription": "In A - B ở dạng thập phân, không có số 0 thừa ở đầu (trừ kết quả 0).",
    "constraints": "1 ≤ |A|, |B| ≤ 2000; chỉ gồm chữ số 0–9, có thể có số 0 đầu; A ≥ B.",
    "samples": [
      {
        "input": "1000000000000000000000\n1",
        "output": "999999999999999999999"
      }
    ],
    "tests": [
      {
        "input": "1000000000000000000000\n1",
        "output": "999999999999999999999"
      },
      {
        "input": "1000\n999",
        "output": "1"
      },
      {
        "input": "00000123\n00000123",
        "output": "0"
      },
      {
        "input": "90000000000000000000\n1234567890123456789",
        "output": "88765432109876543211"
      },
      {
        "input": "0\n0",
        "output": "0"
      },
      {
        "input": "1000000000000000000000000000000\n999999999999999999999999999999",
        "output": "1"
      }
    ]
  },
  {
    "id": "day13-03",
    "day": 13,
    "title": "BONUS — So sánh hai số nguyên lớn",
    "description": "Cho hai số nguyên không âm A và B ở dạng chuỗi. Hãy xác định A < B, A > B hay A = B. Không chuyển cả hai chuỗi sang kiểu số nguyên có sẵn. Chú ý bỏ qua các số 0 ở đầu trước khi so sánh độ dài và chữ số.",
    "inputDescription": "Dòng 1: A. Dòng 2: B.",
    "outputDescription": "In đúng một ký tự: < nếu A < B, > nếu A > B, = nếu A = B.",
    "constraints": "1 ≤ |A|, |B| ≤ 2000; chỉ gồm chữ số 0–9.",
    "samples": [
      {
        "input": "000123\n123",
        "output": "="
      }
    ],
    "tests": [
      {
        "input": "000123\n123",
        "output": "="
      },
      {
        "input": "99999\n100000",
        "output": "<"
      },
      {
        "input": "0100\n00200",
        "output": "<"
      },
      {
        "input": "0\n0000000",
        "output": "="
      },
      {
        "input": "123456789012345678901234567890\n123456789012345678901234567889",
        "output": ">"
      },
      {
        "input": "999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "output": ">"
      }
    ]
  },
  {
    "id": "day13-04",
    "day": 13,
    "title": "BONUS — Trừ hai số lớn có kết quả âm",
    "description": "Cho hai số nguyên không âm A và B, không bảo đảm A ≥ B. Hãy tính A - B. Tự xác định dấu bằng cách so sánh hai chuỗi số, sau đó thực hiện phép trừ trên giá trị lớn hơn và nhỏ hơn. Nếu kết quả bằng 0, không in -0.",
    "inputDescription": "Dòng 1: A. Dòng 2: B.",
    "outputDescription": "In hiệu A - B. Nếu âm thì thêm dấu - phía trước. Không có số 0 thừa ở đầu.",
    "constraints": "1 ≤ |A|, |B| ≤ 2000; chỉ gồm chữ số 0–9; có thể có số 0 đầu.",
    "samples": [
      {
        "input": "20\n35",
        "output": "-15"
      }
    ],
    "tests": [
      {
        "input": "20\n35",
        "output": "-15"
      },
      {
        "input": "00100\n99",
        "output": "1"
      },
      {
        "input": "0\n0",
        "output": "0"
      },
      {
        "input": "999999999999999999999999999999\n1000000000000000000000000000000",
        "output": "-1"
      },
      {
        "input": "0000000004\n0004",
        "output": "0"
      },
      {
        "input": "10000\n1",
        "output": "9999"
      }
    ]
  }
];
