function createTextBlock() {
  const div = document.createElement('div');
  div.className = 'hlx-mypage';
  div.id = 'hlx-mypage-text';
  div.innerHTML = '<p title="blahblah">Here is the text</p>';
  return (div);
}

export default async function loadTestPage() {
  const myTextBlock = document.createElement('div');
  myTextBlock.append(createTextBlock());
  document.body.prepend(myTextBlock);
}
