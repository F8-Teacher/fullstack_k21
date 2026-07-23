let action = 'update';
switch (action) {
    case 'create':
    case 'add':
    case 'insert':
        console.log('Thêm mới');
        break;
    case 'update':
    case 'edit':
        console.log('Cập nhật');
        break;
    case 'delete':
    case 'remove':
        console.log('Xóa');
        break;
    default:
        console.log('Danh sách');
        break;
}

if (action === 'create' || action === 'add' || action === 'insert') {
    console.log('Thêm mới');
} else if (action === 'update' || action === 'edit') {
    console.log('Cập nhật');
} else if (action === 'delete' || action === 'remove') {
    console.log('Xóa');
} else {
    console.log('Danh sách');
}