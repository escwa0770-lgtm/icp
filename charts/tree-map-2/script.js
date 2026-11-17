anychart.onDocumentReady(function () {
    // 🔹 CHANGE HERE: If duplicating, create a separate dataset variable
    var fullData1 = [
        {
            "name": "ARAB REGION",
            "children": [
                // High income
                { "name": "Qatar", "size": 220.42, "value": 97.05, "share": "6.74%", "fill": "#1FA087", "category": "High income" },
                { "name": "Oman", "size": 110.01, "value": 79.30, "share": "3.36%", "fill": "#1FA087", "category": "High income" },
                { "name": "Saudi Arabia", "size": 1067.58, "value": 80.68, "share": "32.64%", "fill": "#1FA087", "category": "High income" },
                { "name": "United Arab Emirates", "size": 556.51, "value": 101.94, "share": "17.01%", "fill": "#1FA087", "category": "High income" },
                { "name": "Kuwait", "size": 189.49, "value": 106.29, "share": "5.79%", "fill": "#1FA087", "category": "High income" },
                { "name": "Bahrain", "size": 42.45, "value": 78.28, "share": "1.30%", "fill": "#1FA087", "category": "High income" },

                // Upper middle income
                { "name": "Iraq", "size": 312.70, "value": 59.73, "share": "9.56%", "fill": "#FF6347", "category": "Upper middle income" },

                // Lower middle income
                { "name": "Egypt", "size": 380.81, "value": 39.04, "share": "11.64%", "fill": "#9467BD", "category": "Lower middle income" },
                { "name": "Morocco", "size": 139.47, "value": 69.57, "share": "4.26%", "fill": "#9467BD", "category": "Lower middle income" },
                { "name": "State of Palestine", "size": 25.17, "value": 102.87, "share": "0.77%", "fill": "#9467BD", "category": "Lower middle income" },
                { "name": "Tunisia", "size": 48.69, "value": 49.75, "share": "1.49%", "fill": "#9467BD", "category": "Lower middle income" },
                { "name": "Jordan", "size": 53.31, "value": 72.40, "share": "1.63%", "fill": "#9467BD", "category": "Lower middle income" },
                { "name": "Mauritania", "size": 11.00, "value": 52.88, "share": "0.34%", "fill": "#9467BD", "category": "Lower middle income" },
                { "name": "Lebanon", "size": 10.55, "value": 58.0, "share": "0.32%", "fill": "#9467BD", "category": "Lower middle income" },

                // Low income
                { "name": "Syrian Arab Republic", "size": 4.09, "value": 30.74, "share": "0.13%", "fill": "#00607F", "category": "Low income" },
                { "name": "Sudan", "size": 99.03, "value": 36.63, "share": "3.03%", "fill": "#00607F", "category": "Low income" }
            ]
        }
    ];
    // Function to determine text color based on background brightness
    function getTextColor(hexColor) {
        const rgb = parseInt(hexColor.slice(1), 16);
        const r = (rgb >> 16) & 0xff;
        const g = (rgb >> 8) & 0xff;
        const b = rgb & 0xff;
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
        return brightness > 128 ? "#000000" : "#FFFFFF"; // White for dark, black for light
    }

    // 🔹 CHANGE HERE: If duplicating, create a separate chart variable (e.g., `chart2`)
    var chart2 = anychart.treeMap(fullData1);

    // Configure labels to dynamically adjust text color
    chart2.labels().useHtml(true).format(function () {
        const textColor = getTextColor(this.getData("fill"));
        return `<span style="color: ${textColor}">${this.getData("name")}</span>`;
    });

    // Set the chart title
    chart2.title().useHtml(true);
    chart2.title(
        "In nominal terms  <br>" +
        "<span style='font-size:12px; font-style:italic'>" +

        "</span>"
    );

    // Enable tooltips with HTML content
    chart2.tooltip().useHtml(true);
    chart2.tooltip().format(
        "COUNTRY: {%name}<br>Share of regional nominal GDP:  {%share}"
    );

    // Add custom legends
    var legendData = [
        { text: "High income", iconFill: "#1FA087", category: "High income" },
        { text: "Upper middle income", iconFill: "#FF6347", category: "Upper middle income" },
        { text: "Lower middle income", iconFill: "#9467BD", category: "Lower middle income" },
        { text: "Low income", iconFill: "#00607F", category: "Low income" }
    ];

    // Render the legend
    var legend = chart2.legend();
    legend.enabled(true);
    legend.itemsLayout("horizontal");
    legend.items(legendData);

    // Maintain a set of active categories for additive filtering
    let activeCategories = new Set();

    // Add interactivity to legends
    chart2.listen("legendItemClick", function (event) {
        const selectedCategory = legendData[event.itemIndex].category;

        if (activeCategories.has(selectedCategory)) {
            activeCategories.delete(selectedCategory);
        } else {
            activeCategories.add(selectedCategory);
        }

        // Filter data based on active categories
        const filteredData = [
            {
                name: "ARAB REGION",
                children: fullData1[0].children.filter(function (item) {
                    return activeCategories.size === 0 || activeCategories.has(item.category);
                })
            }
        ];

        // Update the chart with the filtered data
        chart2.data(filteredData);
    });

    // 🔹 CHANGE HERE: If duplicating, set a unique container ID in the HTML
    chart2.container("treemap2");

    // Draw the chart
    chart2.draw();
});