export const shareOnReddit = () =>
`http://www.reddit.com/submit?url=${encodeURIComponent(
  window.location.href
)}`;

export const shareOnTwitter = (title) =>
`http://twitter.com/intent/tweet?url=${encodeURIComponent(
  window.location.href
)}
  &text=${encodeURIComponent(title)}&via=bigsondev`;

export const shareOnLinkedin = () =>
`https://www.linkedin.com/shareArticle/?url=${encodeURIComponent(
  window.location.href
)}`;

export const shareOnFacebook = () =>
`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
  window.location.href
)}`;