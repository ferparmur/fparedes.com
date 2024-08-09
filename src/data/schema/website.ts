const website = (site: string) => {
    return {
        "@type": "WebSite",
        "@id": `${site}#website`,
        url: `${site}`,
        name: "Fernando Paredes - Web Developer",
        description: "",
        publisher: {
            "@id": `${site}#/schema/person/8b0de6231c6bc0b6d90c3aa271e3ad02`,
        },
        inLanguage: "en-US",
    };
};

export default website;
