import Post from './Post';
import classes from "./PostsList.module.css";

function PostsList() {
  return (
    <ul className={classes.posts}>
      < Post author='Maximilian' body="React je dobar" />
      < Post author='Manuel' body="Dobar kurs" />
    </ul>

    

  );
}
export default PostsList;