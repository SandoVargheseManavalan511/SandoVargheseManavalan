import { Helmet } from "react-helmet-async";

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    image?: string;
    url?: string;
}

export default function SEO({
    title,
    description,
    keywords,
    image,
    url,
}: SEOProps) {
    return (
        <Helmet>
            <title>{title}</title>

            <meta name="description" content={description} />

            {keywords && (
                <meta name="keywords" content={keywords} />
            )}

            <meta property="og:title" content={title} />

            <meta property="og:description" content={description} />

            <meta property="og:type" content="website" />

            {image && (
                <meta property="og:image" content={image} />
            )}

            {url && (
                <meta property="og:url" content={url} />
            )}

            <meta name="twitter:card" content="summary_large_image" />

            <meta name="twitter:title" content={title} />

            <meta
                name="twitter:description"
                content={description}
            />

            {image && (
                <meta
                    name="twitter:image"
                    content={image}
                />
            )}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    name: "CyberShield Security",
                    url: "https://www.cybersecurityrecoveryagency.org/",
                    logo: "https://www.cybersecurityrecoveryagency.org/Favicon.svg",
                    description:
                        "Cybersecurity solutions for businesses.",
                    sameAs: [
                        "https://linkedin.com/in/sando-varghese-manavalan-430280216/",
                        "https://www.instagram.com/cyber_expert_sando?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    ]
                })}
            </script>
        </Helmet>
    );
}