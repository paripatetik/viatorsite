export default function CommentForm() {
  return (
    <form className="space-y-2">
      <textarea className="w-full border" rows="4" placeholder="Comment" />
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
        Submit
      </button>
    </form>
  );
}
