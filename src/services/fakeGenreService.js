export const genres = [
    {_id: "1" , name :"Action"},
    {_id: "2" , name :"Thriller"}
];

export function getGenres () {
    return genres;
}

export function getGenre(id) {
    return genres.find(g=>g._id === id);
}