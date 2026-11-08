
 // Day 22 — Ước, bội, số nguyên tố
// 3 bài chính + 1 bài bonus.
// Mỗi bài có samples và ít nhất 4 tests.

export default [
  {
    "id": "day22-01",
    "day": 22,
    "title": "Ước chung lớn nhất và bội chung nhỏ nhất",
    "description": "Cho q cặp số nguyên dương (a,b). Với mỗi cặp, hãy tìm ước chung lớn nhất (GCD) và bội chung nhỏ nhất (LCM). GCD là số nguyên dương lớn nhất chia hết cả a và b. LCM là số nguyên dương nhỏ nhất chia hết cho cả a và b. Chú ý xử lý trường hợp hai số rất lớn để tránh tràn số.",
    "inputDescription": "Dòng 1: số nguyên q. q dòng tiếp theo, mỗi dòng gồm hai số nguyên dương a và b.",
    "outputDescription": "Với mỗi cặp, in GCD và LCM cách nhau một dấu cách trên một dòng.",
    "constraints": "1 ≤ q ≤ 100000; 1 ≤ a,b ≤ 10^9; kết quả LCM nằm trong phạm vi số nguyên 64 bit.",
    "samples": [
      {
        "input": "4\n12 18\n7 5\n1000000000 999999999\n36 48",
        "output": "6 36\n1 35\n1 999999999000000000\n12 144"
      }
    ],
    "tests": [
      {
        "input": "4\n12 18\n7 5\n1000000000 999999999\n36 48",
        "output": "6 36\n1 35\n1 999999999000000000\n12 144"
      },
      {
        "input": "1\n1 1",
        "output": "1 1"
      },
      {
        "input": "3\n10 15\n21 14\n81 54",
        "output": "5 30\n7 42\n27 162"
      },
      {
        "input": "2\n1 1000000000\n1000000000 500000000",
        "output": "1 1000000000\n500000000 1000000000"
      },
      {
        "input": "4\n6 6\n13 17\n16 24\n999999937 999999937",
        "output": "6 6\n1 221\n8 48\n999999937 999999937"
      },
      {
        "input": "3\n2 3\n1000000000 250000000\n999999999 999999999",
        "output": "1 6\n250000000 1000000000\n999999999 999999999"
      }
    ]
  },
  {
    "id": "day22-02",
    "day": 22,
    "title": "Kiểm tra số nguyên tố",
    "description": "Cho t số nguyên dương. Với mỗi số x, hãy xác định x có phải số nguyên tố hay không. Một số nguyên tố là số nguyên lớn hơn 1 và chỉ có đúng hai ước nguyên dương là 1 và chính nó. Vì các giá trị có thể lớn, cần tìm cách kiểm tra hiệu quả thay vì thử tất cả số từ 2 đến x-1.",
    "inputDescription": "Dòng 1: số nguyên t. t dòng tiếp theo, mỗi dòng chứa một số nguyên dương x.",
    "outputDescription": "Với mỗi số x, in YES nếu x là số nguyên tố, ngược lại in NO. Mỗi kết quả trên một dòng.",
    "constraints": "1 ≤ t ≤ 1000; 1 ≤ x ≤ 10^9.",
    "samples": [
      {
        "input": "7\n1\n2\n3\n4\n17\n25\n97",
        "output": "NO\nYES\nYES\nNO\nYES\nNO\nYES"
      }
    ],
    "tests": [
      {
        "input": "7\n1\n2\n3\n4\n17\n25\n97",
        "output": "NO\nYES\nYES\nNO\nYES\nNO\nYES"
      },
      {
        "input": "1\n1",
        "output": "NO"
      },
      {
        "input": "1\n2",
        "output": "YES"
      },
      {
        "input": "6\n2\n4\n9\n49\n121\n169",
        "output": "YES\nNO\nNO\nNO\nNO\nNO"
      },
      {
        "input": "6\n97\n221\n999999937\n999999929\n999999931\n1000000000",
        "output": "YES\nNO\nYES\nYES\nNO\nNO"
      },
      {
        "input": "5\n31607\n999002449\n29\n31\n35",
        "output": "YES\nNO\nYES\nYES\nNO"
      }
    ]
  },
  {
    "id": "day22-03",
    "day": 22,
    "title": "Đếm số nguyên tố trong nhiều đoạn",
    "description": "Cho số nguyên dương n và q truy vấn. Mỗi truy vấn gồm hai số l, r, yêu cầu đếm số nguyên tố trong đoạn [l,r], tính cả hai đầu. Vì số lượng truy vấn rất lớn, việc kiểm tra từng số trong từng truy vấn sẽ không đủ nhanh. Hãy tìm cách tiền xử lý các số nguyên tố từ 1 đến n để trả lời hiệu quả.",
    "inputDescription": "Dòng 1: n q. q dòng tiếp theo, mỗi dòng chứa hai số nguyên l r.",
    "outputDescription": "Với mỗi truy vấn, in số lượng số nguyên tố thuộc đoạn [l,r] trên một dòng.",
    "constraints": "1 ≤ n ≤ 2000000; 1 ≤ q ≤ 200000; 1 ≤ l ≤ r ≤ n.",
    "samples": [
      {
        "input": "20 4\n1 10\n10 20\n1 20\n14 18",
        "output": "4\n4\n8\n1"
      }
    ],
    "tests": [
      {
        "input": "20 4\n1 10\n10 20\n1 20\n14 18",
        "output": "4\n4\n8\n1"
      },
      {
        "input": "1 3\n1 1\n1 1\n1 1",
        "output": "0\n0\n0"
      },
      {
        "input": "2 3\n1 1\n2 2\n1 2",
        "output": "0\n1\n1"
      },
      {
        "input": "30 5\n1 30\n4 10\n11 29\n24 30\n14 16",
        "output": "10\n2\n6\n1\n0"
      },
      {
        "input": "100 4\n1 100\n50 100\n90 100\n1 1",
        "output": "25\n10\n1\n0"
      },
      {
        "input": "1000 4\n1 1000\n997 1000\n998 999\n100 200",
        "output": "168\n1\n0\n21"
      }
    ]
  },
  {
    "id": "day22-04",
    "day": 22,
    "title": "BONUS — Phân tích thừa số nguyên tố",
    "description": "Cho t số nguyên dương. Với mỗi số x, hãy phân tích x thành tích các lũy thừa của số nguyên tố. Ví dụ: 360 = 2^3 * 3^2 * 5^1. Các thừa số nguyên tố phải được in theo thứ tự tăng dần, kèm theo số mũ của chúng. Nếu x = 1, in 1. Vì có nhiều số cần phân tích và giá trị có thể lớn, hãy lựa chọn phương pháp phù hợp để tránh thử chia không cần thiết.",
    "inputDescription": "Dòng 1: số nguyên t. t dòng tiếp theo, mỗi dòng chứa một số nguyên dương x.",
    "outputDescription": "Với mỗi số x > 1, in các thừa số nguyên tố dưới dạng p^e, trong đó p là số nguyên tố và e là số mũ của p. Các cặp được sắp xếp theo p tăng dần, cách nhau một dấu cách. Nếu x = 1, in 1. Mỗi số được phân tích trên một dòng.",
    "constraints": "1 ≤ t ≤ 1000; 1 ≤ x ≤ 10^12; sử dụng số nguyên 64 bit.",
    "samples": [
      {
        "input": "5\n1\n12\n360\n97\n1000000000000",
        "output": "1\n2^2 3^1\n2^3 3^2 5^1\n97^1\n2^12 5^12"
      }
    ],
    "tests": [
      {
        "input": "5\n1\n12\n360\n97\n1000000000000",
        "output": "1\n2^2 3^1\n2^3 3^2 5^1\n97^1\n2^12 5^12"
      },
      {
        "input": "1\n1",
        "output": "1"
      },
      {
        "input": "4\n64\n81\n210\n999983",
        "output": "2^6\n3^4\n2^1 3^1 5^1 7^1\n999983^1"
      },
      {
        "input": "3\n999966000289\n999962000357\n999999999989",
        "output": "999983^2\n999979^1 999983^1\n999999999989^1"
      },
      {
        "input": "3\n999999999999\n999999937\n999999999",
        "output": "3^3 7^1 11^1 13^1 37^1 101^1 9901^1\n999999937^1\n3^4 37^1 333667^1"
      },
      {
        "input": "3\n2\n3\n4",
        "output": "2^1\n3^1\n2^2"
      }
    ]
  }
];
