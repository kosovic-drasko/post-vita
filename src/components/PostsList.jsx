import Post from './Post';
import classes from "./PostsList.module.css";
import NewPost from './NewPost';
function PostsList() {
  return (
    <>
    <NewPost/>
    <ul className={classes.posts}>
      < Post author='Maximilian' body="React je dobar" />
      < Post author='Manuel' body="Dobar kurs" />
    </ul>
    </>
  );
}
export default PostsList;