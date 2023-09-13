export default function (imageAddress) {
    return new URL(`/src/assets/images/${imageAddress}`, import.meta.url).href
}
