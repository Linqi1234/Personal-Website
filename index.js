class ArtCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });


    // 获取 link-url 属性，如果没有提供默认值为 #
    const linkUrl = this.getAttribute('link-url') || '#';

    // 创建卡片容器
    const cardContainer = document.createElement('div');
    cardContainer.setAttribute('class', 'card-container');

    // 创建图片
    const img = document.createElement('img');
    img.src = this.getAttribute('img-src') || 'imgs/default_image.svg';
    img.setAttribute('class', 'card-image');

    // 创建文字内容容器
    const textContainer = document.createElement('div');
    textContainer.setAttribute('class', 'text-container');

    // 创建链接图标
    const linkIcon = document.createElement('img');
    linkIcon.src = 'imgs/link.svg';
    linkIcon.setAttribute('class', 'card-link');

    const linkElement = document.createElement('a');
    linkElement.href = linkUrl;  // 动态获取链接
    linkElement.appendChild(linkIcon);  // 将图标包裹在 <a> 标签中

    // 创建标题
    const title = document.createElement('div');
    title.textContent = this.getAttribute('title') || 'Default Title';
    title.setAttribute('class', 'card-text1');

    // 创建描述
    const description = document.createElement('div');
    description.textContent = this.getAttribute('description') || 'Default Description';
    description.setAttribute('class', 'card-text2');

    // 将文本内容添加到容器中
    textContainer.appendChild(linkIcon);
    textContainer.appendChild(title);
    textContainer.appendChild(description);

    // 将图片和文本容器添加到卡片容器中
    cardContainer.appendChild(img);
    cardContainer.appendChild(textContainer);

    // 添加样式
    const style = document.createElement('style');
    style.textContent = `
     
      .card-container {
        width: 23rem;
        height: 24rem;
        font-family: "Space Grotesk";
        background-image: url('imgs/card.svg'); 
        background-size: contain;
        background-repeat: no-repeat;
        flex-direction: column;
      }

      .card-image {
        width: 80%;
        margin: 2.5rem;
        margin-left: 2.25rem;
        margin-bottom: 0.8rem;
        object-fit: contain;
        border-width: 3px;
        border-color: rgb(0, 0, 0);
      }

      .text-container {
        margin: 2.5rem;
        margin-top: 0;
      }

      .card-link {
        display: flex;
        width: 2rem;
        float: right;
        cursor: pointer; /* 鼠标悬停时显示手型 */
      }

      .card-text1 {
        font-size: x-large;
        font-weight: bold;
        line-height: 1.9rem;
        width: 85%;
      }

      .card-text2 {
        font-weight: 500;
        margin-top: 2px;
        line-height: 1.5rem;
        width: 85%;
      }

       a {
        text-decoration: none; /* 链接默认无下划线 */
      }
    `;

    // 将样式和卡片容器添加到 shadow DOM 中
    shadow.appendChild(style);
    shadow.appendChild(cardContainer);
  }
}

// 注册自定义元素
customElements.define('art-card', ArtCard);
