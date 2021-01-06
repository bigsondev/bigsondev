export const shareOnReddit = (title) =>
  typeof window !== 'undefined'
    ? `http://www.reddit.com/submit?url=${encodeURIComponent(
        window.location.href
      )}&title=${title}`
    : undefined;

export const shareOnTwitter = (title) =>
  typeof window !== 'undefined'
    ? `http://twitter.com/intent/tweet?url=${encodeURIComponent(
        window.location.href
      )}
  &text=${encodeURIComponent(title)}&via=bigsondev`
    : undefined;

export const shareOnLinkedin = () =>
  typeof window !== 'undefined'
    ? `https://www.linkedin.com/shareArticle/?url=${encodeURIComponent(
        window.location.href
      )}`
    : undefined;

export const shareOnFacebook = () =>
  typeof window !== 'undefined'
    ? `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        window.location.href
      )}`
    : undefined;
