export default {
    Query: {
        movies: () => client.movie.updateMany(),
        movie: (_, {id}) => client.movie.findUnique({where: {id}}),
        }};
        