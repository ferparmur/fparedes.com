const breadcrumbList = (canonicalUrl: string, items: Array<any>) => {
    const list = {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        itemListElement: [],
    };

    for (let i = 0; i < items.length; i++) {
        const itemListElement = {
            "@type": "ListItem",
            position: i + 1,
            name: items[i].name,
        };

        if (items[i].item) {
            itemListElement["item"] = items[i].item;
        }

        list.itemListElement.push(itemListElement);
    }

    return list;
};

export default breadcrumbList;
