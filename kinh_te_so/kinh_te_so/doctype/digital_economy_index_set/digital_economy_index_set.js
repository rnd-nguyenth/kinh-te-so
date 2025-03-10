// Copyright (c) 2025, Nguyenth and contributors
// For license information, please see license.txt

frappe.ui.form.on('Index Set', {
    gia_tri_thanh_phan_a: function(frm, cdt, cdn) {
        calculate_gia_tri_tham_chieu(frm, cdt, cdn);
    },
    gia_tri_thanh_phan_b: function(frm, cdt, cdn) {
        calculate_gia_tri_tham_chieu(frm, cdt, cdn);
    }
});

function calculate_gia_tri_tham_chieu(frm, cdt, cdn) {
    let d = locals[cdt][cdn];
    let gia_tri_a = parseFloat(d.gia_tri_thanh_phan_a) || 0;
    let gia_tri_b = parseFloat(d.gia_tri_thanh_phan_b) || 0;
    
    if (gia_tri_b !== 0) {
        d.gia_tri_tham_chieu = (gia_tri_a / gia_tri_b) * 100;
    } else {
        d.gia_tri_tham_chieu = 0;
    }
    frm.refresh_field("bang_nhan_thuc_so_va_the_che_so");
    frm.refresh_field("bang_ha_tang_va_an_ninh_mang");
    frm.refresh_field("bang_nhan_luc_so");
    frm.refresh_field("bang_hoat_dong_kinh_te_so");
    frm.refresh_field("bang_kinh_te_so_logistics");
}
