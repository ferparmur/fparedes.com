type BreadcrumbItem = {
    name: string;
    item?: string;
};

type BreadcrumbList = {
    "@type": "BreadcrumbList";
    "@id": string;
    itemListElement: Array<{
        "@type": "ListItem";
        position: number;
        name: string;
        item?: string;
    }>;
};

const breadcrumbList = (
    canonicalUrl: string,
    items: Array<BreadcrumbItem>,
): BreadcrumbList => {
    const list: BreadcrumbList = {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        itemListElement: [],
    };

    for (let i = 0; i < items.length; i++) {
        const itemListElement = {
            "@type": "ListItem" as const, // Explicitly cast to the string literal type
            position: i + 1,
            name: items[i].name,
            item: items[i].item,
        };

        list.itemListElement.push(itemListElement);
    }

    return list;
};

export default breadcrumbList;
