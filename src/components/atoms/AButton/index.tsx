import React from 'react';

type Data = {
  content: string;
};
function AButton({ content, onClick }: any) {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      {content}
    </button>
  );
}

export default AButton;
