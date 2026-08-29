(() => {
  const copyButton = document.querySelector('[data-copy-group]');
  const feedback = document.querySelector('.group-copy-feedback');

  if (!copyButton || !feedback) return;

  copyButton.addEventListener('click', async () => {
    const groupNumber = copyButton.dataset.copyGroup;

    try {
      await navigator.clipboard.writeText(groupNumber);
      copyButton.textContent = '已复制';
      feedback.textContent = '群号已复制，打开 QQ 搜索群号即可进群。';
    } catch {
      feedback.textContent = `请手动复制群号：${groupNumber}`;
    }

    window.setTimeout(() => {
      copyButton.textContent = '复制群号';
    }, 1800);
  });
})();
