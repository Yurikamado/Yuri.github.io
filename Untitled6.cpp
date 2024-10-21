#include <iostream>
using namespace std;

int main() {
    int n, i = 1;  // Khởi tạo biến n và biến đếm i
    cout << "Nhap so nguyen duong n: ";
    cin >> n;

    cout << "Cac uoc so cua " << n << " la: ";
    
    // Sử dụng cấu trúc lặp while để tìm các ước số của n
    while (i <= n) {
        if (n % i == 0) {
            cout << i << " ";  // In ra i nếu i là ước số của n
        }
        i++;  // Tăng biến đếm
    }
    cout << endl;

    return 0;
}
