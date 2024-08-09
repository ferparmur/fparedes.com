const person = (site: string) => {
    return {
        "@type": ["Person", "Organization"],
        "@id": `${site}#/schema/person/8b0de6231c6bc0b6d90c3aa271e3ad02`,
        name: "Fernando Paredes Murillo",
        image: {
            "@type": "ImageObject",
            "@id": `${site}#personlogo`,
            inLanguage: "en-US",
            url: `${site}media/fernando-paredes.png`,
            contentUrl: `${site}media/fernando-paredes.png`,
            width: 512,
            height: 512,
            caption: "Fernando Paredes Murillo",
        },
        logo: {
            "@id": `${site}#personlogo`,
        },
        sameAs: [
            site,
            "https://www.linkedin.com/in/fernandoparedes/",
            "https://twitter.com/ferparmur",
        ],
        url: site,
    };
};

export default person;
