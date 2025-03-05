// Função para copiar o PIX
document.getElementById('copy-pix').addEventListener('click', function () {
    const pixText = 'jrpedrosorodrigo@gmail.com';
    navigator.clipboard.writeText(pixText).then(() => {
      const pixCopiedElement = document.getElementById('pix-copied');
      pixCopiedElement.style.display = 'block';
      setTimeout(() => {
        pixCopiedElement.style.display = 'none';
      }, 2000);
    });
  });
  
  // Gerar botões de valor dinamicamente
  const buttonGroup = document.getElementById('button-group');
  const values = [30, 50, 70, 100, 160, 200, 250, 300, 350, 400, 500, 700, 900, 1000];
  
  values.forEach(value => {
    const button = document.createElement('button');
    button.className = 'button';
    button.textContent = `R$${value},00`;
    button.addEventListener('click', () => {
      navigator.clipboard.writeText('jrpedrosorodrigo@gmail.com').then(() => {
        const pixCopiedElement = document.getElementById('pix-copied');
        pixCopiedElement.style.display = 'block';
        setTimeout(() => {
          pixCopiedElement.style.display = 'none';
        }, 2000);
      });
    });
    buttonGroup.appendChild(button);
  });