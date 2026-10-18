// Day 18 — Kiểm tra 3 và chữa lỗi (chuỗi + mảng cộng dồn/mảng hiệu)
// 2 bài chính + 2 bài bonus. Mỗi bài có samples và ít nhất 4 tests.

export default [
  {
    "id": "day18-01",
    "day": 18,
    "title": "Kiểm tra — Đếm từ trong đoạn văn bản",
    "description": "Cho một dòng văn bản gồm các từ cách nhau bởi một hoặc nhiều dấu cách. Tách từ, rồi in số từ và từ dài nhất. Nếu có nhiều từ dài nhất, in từ xuất hiện đầu tiên.",
    "inputDescription": "Một dòng văn bản, có thể có nhiều dấu cách ở đầu, giữa hoặc cuối; dòng không rỗng sau khi bỏ khoảng trắng.",
    "outputDescription": "Dòng 1: số từ. Dòng 2: từ dài nhất, giữ nguyên cách viết trong dữ liệu vào.",
    "constraints": "Độ dài dòng không quá 200000 ký tự; từ gồm chữ cái tiếng Anh và chữ số.",
    "samples": [
      {
        "input": "  hoc   lap trinh   moi ngay ",
        "output": "5\nngay"
      }
    ],
    "tests": [
      {
        "input": "  hoc   lap trinh   moi ngay ",
        "output": "5\nngay"
      },
      {
        "input": "algorithm",
        "output": "1\nalgorithm"
      },
      {
        "input": "a bb cc ddd ee",
        "output": "5\nddd"
      },
      {
        "input": "one two three four",
        "output": "4\nthree"
      },
      {
        "input": "  C++  two-pointers  prefix-sum ",
        "output": "3\nprefix-sum"
      }
    ]
  },
  {
    "id": "day18-02",
    "day": 18,
    "title": "Kiểm tra — Tổng đoạn sau các cập nhật",
    "description": "Ban đầu có n phần tử bằng 0. Thực hiện q thao tác cộng v trên đoạn [l,r], sau đó trả lời t truy vấn tổng đoạn [x,y]. Giải bằng mảng hiệu để áp dụng cập nhật và mảng cộng dồn để trả lời truy vấn. Chú ý chỉ số bắt đầu từ 1; r+1 có thể bằng n+1.",
    "inputDescription": "Dòng 1: n q t. q dòng tiếp theo: l r v. t dòng cuối: x y.",
    "outputDescription": "In tổng mỗi đoạn truy vấn trên một dòng.",
    "constraints": "1 ≤ n,q,t ≤ 200000; 1 ≤ l ≤ r ≤ n; |v| ≤ 10^9; tổng nằm trong phạm vi số nguyên 64 bit.",
    "samples": [
      {
        "input": "5 2 3\n1 3 2\n3 5 4\n1 5\n2 4\n5 5",
        "output": "18\n12\n4"
      }
    ],
    "tests": [
      {
        "input": "5 2 3\n1 3 2\n3 5 4\n1 5\n2 4\n5 5",
        "output": "18\n12\n4"
      },
      {
        "input": "1 1 2\n1 1 -9\n1 1\n1 1",
        "output": "-9\n-9"
      },
      {
        "input": "4 0 2\n1 4\n2 3",
        "output": "0\n0"
      },
      {
        "input": "6 3 3\n2 6 5\n1 3 -2\n4 4 10\n1 6\n2 3\n4 5",
        "output": "28\n6\n20"
      },
      {
        "input": "5 2 2\n1 5 1000000000\n2 4 1000000000\n1 5\n2 4",
        "output": "8000000000\n6000000000"
      }
    ]
  },
  {
    "id": "day18-03",
    "day": 18,
    "title": "BONUS — Kiểm tra chuỗi đối xứng sau chuẩn hóa",
    "description": "Cho một dòng văn bản. Chỉ giữ lại chữ cái tiếng Anh và chữ số, đồng thời chuyển chữ hoa thành chữ thường. Kiểm tra chuỗi còn lại có đối xứng hay không.",
    "inputDescription": "Một dòng văn bản, độ dài không quá 200000 ký tự.",
    "outputDescription": "In YES nếu chuỗi sau chuẩn hóa đối xứng, ngược lại in NO.",
    "constraints": "Dòng có thể chứa chữ hoa, chữ thường, chữ số, dấu cách và dấu câu.",
    "samples": [
      {
        "input": "A man, a plan, a canal: Panama!",
        "output": "YES"
      }
    ],
    "tests": [
      {
        "input": "A man, a plan, a canal: Panama!",
        "output": "YES"
      },
      {
        "input": "race a car",
        "output": "NO"
      },
      {
        "input": "No 'x' in Nixon",
        "output": "YES"
      },
      {
        "input": "12321",
        "output": "YES"
      },
      {
        "input": "OpenAI 2026",
        "output": "NO"
      }
    ]
  },
  {
    "id": "day18-04",
    "day": 18,
    "title": "BONUS — Mức hoạt động theo khoảng ngày",
    "description": "Có n ngày, mỗi ngày ban đầu có mức hoạt động a[i]. Thực hiện q lần cộng thêm v vào mọi ngày trong đoạn [l,r]. Sau đó có t truy vấn yêu cầu tính tổng mức hoạt động trên đoạn [x,y]. Hãy dùng mảng hiệu để xử lý cập nhật, rồi dùng mảng cộng dồn để trả lời truy vấn.",
    "inputDescription": "Dòng 1: n q t. Dòng 2: n số a[i]. q dòng cập nhật: l r v. t dòng truy vấn: x y.",
    "outputDescription": "Với mỗi truy vấn, in tổng mức hoạt động sau cập nhật trên đoạn.",
    "constraints": "1 ≤ n,q,t ≤ 200000; |a[i]|,|v| ≤ 10^9; 1 ≤ l ≤ r ≤ n; tổng nằm trong phạm vi số nguyên 64 bit.",
    "samples": [
      {
        "input": "5 2 3\n1 2 3 4 5\n2 4 3\n4 5 -2\n1 5\n2 4\n4 5",
        "output": "19\n18\n5"
      }
    ],
    "tests": [
      {
        "input": "5 2 3\n1 2 3 4 5\n2 4 3\n4 5 -2\n1 5\n2 4\n4 5",
        "output": "19\n18\n5"
      },
      {
        "input": "3 1 2\n0 0 0\n1 3 7\n1 3\n2 2",
        "output": "21\n7"
      },
      {
        "input": "4 0 2\n-1 -2 -3 -4\n1 4\n2 3",
        "output": "-10\n-5"
      },
      {
        "input": "6 3 3\n5 5 5 5 5 5\n1 6 1\n3 4 -8\n2 5 2\n1 6\n2 5\n3 4",
        "output": "26\n10\n-4"
      },
      {
        "input": "3 2 2\n1000000000 0 -1000000000\n1 2 5\n2 3 -5\n1 3\n2 2",
        "output": "0\n0"
      }
    ]
  }
];