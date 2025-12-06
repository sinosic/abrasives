// spec-details.js - 处理详细规格页面
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const product = urlParams.get('product');
    const specDetails = document.getElementById('specification-details');
    
    const productData = {
        'black-silicon-carbide': {
            title: 'Black Silicon Carbide - Detailed Specifications',
            tables: [
                {
                    title: 'Chemical Composition',
                    headers: ['Component', 'Content (%)'],
                    rows: [
                        ['SiC', '≥98.5%'],
                        ['Free Carbon', '≤0.2%'],
                        ['Fe₂O₃', '≤0.6%'],
                        ['SiO₂', '≤0.5%'],
                        ['Al₂O₃', '≤0.3%']
                    ]
                },
                {
                    title: 'Physical Properties',
                    headers: ['Property', 'Value'],
                    rows: [
                        ['Hardness (Mohs)', '9.2-9.3'],
                        ['Density (g/cm³)', '3.20-3.25'],
                        ['Melting Point (°C)', '2700°C (decomposes)'],
                        ['Color', 'Black'],
                        ['Crystal Structure', 'Hexagonal']
                    ]
                }
            ]
        },
        'green-silicon-carbide': {
            title: 'Green Silicon Carbide - Detailed Specifications',
            tables: [
                {
                    title: 'Chemical Composition',
                    headers: ['Component', 'Content (%)'],
                    rows: [
                        ['SiC', '≥99.0%'],
                        ['Free Carbon', '≤0.1%'],
                        ['Fe₂O₃', '≤0.2%'],
                        ['SiO₂', '≤0.3%'],
                        ['Al₂O₃', '≤0.1%']
                    ]
                }
                // ... 其他表格数据
            ]
        }
        // ... 其他产品数据
    };
    
    function renderProductDetails(productKey) {
        const data = productData[productKey];
        if (!data) {
            specDetails.innerHTML = '<p>Product not found.</p>';
            return;
        }
        
        let html = `
            <div class="spec-detail-container">
                <h2>${data.title}</h2>
                <div class="pdf-viewer">
                    <p>PDF Viewer Placeholder - Custom PDF/Table upload functionality</p>
                    <button class="upload-btn" onclick="uploadCustomFile('${productKey}')">Upload Custom File</button>
                </div>
        `;
        
        data.tables.forEach(table => {
            html += `
                <div class="spec-table">
                    <h4>${table.title}</h4>
                    <table>
                        <tr>${table.headers.map(header => `<th>${header}</th>`).join('')}</tr>
                        ${table.rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`')}
                    </table>
                </div>
            `;
        });
        
        html += `</div>`;
        specDetails.innerHTML = html;
    }
    
    if (product) {
        renderProductDetails(product);
    } else {
        specDetails.innerHTML = '<p>Please select a product to view specifications.</p>';
    }
});

function uploadCustomFile(product) {
    // 这里可以实现文件上传功能
    alert(`Upload functionality for ${product} would be implemented here.`);
}