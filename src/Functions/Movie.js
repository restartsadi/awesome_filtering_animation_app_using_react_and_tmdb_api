import { motion } from "framer-motion";
export default function Movie({ movie }) {
  return (
    <motion.div
      Layout
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 1, scale: 0 }}
      exit={{ opacity: 1, scale: 0 }}
      transition={{ duration: 0.35 }}
    >
      <h2>{movie.title}</h2>
      <img
        src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
        alt=""
      />
    </motion.div>
  );
}
