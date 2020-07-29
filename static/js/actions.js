// lifeTime 祯数
const color1 = {
  h: 279,
  s: "100%",
  l: "50%",
  a: "80%"
};
const color2 = {
  h: 197,
  s: "100%",
  l: "50%",
  a: "80%"
};
const color3 = {
  h: 0,
  s: "100%",
  l: "50%",
  a: "80%"
};
const color4 = {
  h: 120,
  s: "100%",
  l: "50%",
  a: "80%"
};
const color5 = {
  h: 60,
  s: "100%",
  l: "50%",
  a: "80%"
};
const color6 = {
  h: 30,
  s: "100%",
  l: "50%",
  a: "80%"
};
const points1 = [];
const points2 = [];
const Actions = [
  {
    lifeTime: 120,
    texts: [
      {
        text: "To",
        hsla: color3
      },
      {
        text: "心",
        hsla: color1
      },
      {
        text: "心",
        hsla: color1
      }
    ]
  },
  {
    lifeTime: 120,
    func: (width, height) => {
      if (!points1.length) {
        for (let i = 0; i < 1200; i++) {
          let x = (i - 1200 / 2) / 300;
          let y =
            Math.sqrt(Math.abs(x)) - Math.sqrt(Math.cos(x)) * Math.cos(30 * x);
          if (!isNaN(y)) {
            points1.push({ x, y });
          }
        }
      }

      const p = points1[~~(Math.random() * points1.length)];
      const radius = Math.min(width * 0.4, height * 0.4);
      return {
        x: (p.x * radius) / 2,
        y: (p.y * radius) / 2,
        z: ~~(Math.random() * 30),
        color: {
          h: 0,
          s: "100%",
          l: "70%",
          a: "80%"
        }
      };
    }
  },
  {
    lifeTime: 120,
    texts: [
      {
        text: "不",
        hsla: color2
      },
      {
        text: "知",
        hsla: color2
      },
      {
        text: "不",
        hsla: color2
      },
      {
        text: "觉",
        hsla: color2
      }
    ]
  },
  {
    lifeTime: 80,
    texts: [
      {
        text: "已",
        hsla: color2
      },
      {
        text: "经",
        hsla: color2
      }
    ]
  },
  {
    lifeTime: 80,
    texts: [
      {
        text: "一",
        hsla: color2
      },
      {
        text: "年",
        hsla: color2
      },
      {
        text: "了",
        hsla: color2
      }
    ]
  },
  {
    lifeTime: 80,
    texts: [
      {
        text: "每",
        hsla: color2
      },
      {
        text: "当",
        hsla: color2
      },
      {
        text: "我",
        hsla: color2
      }
    ]
  },
  {
    lifeTime: 80,
    texts: [
      {
        text: "想",
        hsla: color2
      },
      {
        text: "到",
        hsla: color2
      },
      {
        text: "你",
        hsla: color2
      }
    ]
  },
  {
    lifeTime: 80,
    texts: [
      {
        text: "那",
        hsla: color2
      },
      {
        text: "些",
        hsla: color2
      },
      {
        text: "美",
        hsla: color2
      },
      {
        text: "好",
        hsla: color2
      }
    ]
  },
  {
    lifeTime: 80,
    texts: [
      {
        text: "都",
        hsla: color2
      },
      {
        text: "浮",
        hsla: color2
      },
      {
        text: "现",
        hsla: color2
      }
    ]
  },
  {
    lifeTime: 80,
    texts: [
      {
        text: "在",
        hsla: color2
      },
      {
        text: "眼",
        hsla: color2
      },
      {
        text: "前",
        hsla: color2
      }
    ]
  },
  {
    lifeTime: 150,
    func: (width, height) => {
      if (!points2.length) {
        const img = document.getElementById("tulip");
        const offscreenCanvas = document.createElement("canvas");
        const offscreenCanvasCtx = offscreenCanvas.getContext("2d");
        const imgWidth = 600;
        const imgHeight = 900;
        offscreenCanvas.setAttribute("width", imgWidth);
        offscreenCanvas.setAttribute("height", imgHeight);
        offscreenCanvasCtx.drawImage(img, 0, 0, imgWidth, imgHeight);
        let imgData = offscreenCanvasCtx.getImageData(
          0,
          0,
          imgWidth,
          imgHeight
        );
        for (let i = 0, max = imgData.width * imgData.height; i < max; i++) {
          if (imgData.data[i * 4 + 3]) {
            points2.push({
              x: (i % imgData.width) / imgData.width,
              y: i / imgData.width / imgData.height
            });
          }
        }
      }
      const p = points2[~~(Math.random() * points2.length)];
      const radius = Math.min(width * 0.8, height * 0.8);
      return {
        x: p.x * radius - radius / 2,
        y: (1 - p.y) * radius - radius / 2,
        z: ~~(Math.random() * 30),
        color: {
          h: 0,
          s: "100%",
          l: "60%",
          a: "80%"
        }
      };
    }
  },
  {
    lifeTime: 80,
    texts: [
      {
        text: "想",
        hsla: color2
      },
      {
        text: "和",
        hsla: color2
      },
      {
        text: "你",
        hsla: color2
      }
    ]
  },
  {
    lifeTime: 80,
    texts: [
      {
        text: "在",
        hsla: color2
      },
      {
        text: "未",
        hsla: color2
      },
      {
        text: "来",
        hsla: color2
      }
    ]
  },
  {
    lifeTime: 80,
    texts: [
      {
        text: "走",
        hsla: color2
      },
      {
        text: "过",
        hsla: color2
      }
    ]
  },
  {
    lifeTime: 120,
    texts: [
      {
        text: "更",
        hsla: color2
      },
      {
        text: "多",
        hsla: color2
      },
      {
        text: "地",
        hsla: color2
      },
      {
        text: "方",
        hsla: color2
      }
    ]
  },
  {
    lifeTime: 80,
    texts: [
      {
        text: "想",
        hsla: color2
      },
      {
        text: "要",
        hsla: color2
      },
      {
        text: "早",
        hsla: color2
      },
      {
        text: "些",
        hsla: color2
      }
    ]
  },
  {
    lifeTime: 80,
    texts: [
      {
        text: "回",
        hsla: color2
      },
      {
        text: "到",
        hsla: color2
      }
    ]
  },
  {
    lifeTime: 120,
    texts: [
      {
        text: "你",
        hsla: color2
      },
      {
        text: "的",
        hsla: color2
      },
      {
        text: "身",
        hsla: color2
      },
      {
        text: "旁",
        hsla: color2
      }
    ]
  },
  {
    lifeTime: 80,
    texts: [
      {
        text: "想",
        hsla: color2
      },
      {
        text: "见",
        hsla: color2
      },
      {
        text: "你",
        hsla: color2
      }
    ]
  },
  {
    lifeTime: 80,
    texts: [
      {
        text: "每",
        hsla: color2
      },
      {
        text: "个",
        hsla: color2
      }
    ]
  },
  {
    lifeTime: 80,
    texts: [
      {
        text: "清",
        hsla: color2
      },
      {
        text: "晨",
        hsla: color2
      }
    ]
  },
  {
    lifeTime: 120,
    texts: [
      {
        text: "和",
        hsla: color2
      },
      {
        text: "傍",
        hsla: color2
      },
      {
        text: "晚",
        hsla: color2
      }
    ]
  },
  {
    lifeTime: 80,
    texts: [
      {
        text: "这",
        hsla: color2
      },
      {
        text: "是",
        hsla: color2
      }
    ]
  },
  {
    lifeTime: 80,
    texts: [
      {
        text: "我",
        hsla: color2
      },
      {
        text: "们",
        hsla: color2
      },
      {
        text: "的",
        hsla: color2
      }
    ]
  },
  {
    lifeTime: 120,
    texts: [
      {
        text: "第",
        hsla: color2
      },
      {
        text: "一",
        hsla: color2
      },
      {
        text: "年",
        hsla: color2
      }
    ]
  },
  {
    lifeTime: 80,
    texts: [
      {
        text: "以",
        hsla: color2
      },
      {
        text: "后",
        hsla: color2
      }
    ]
  },
  {
    lifeTime: 80,
    texts: [
      {
        text: "还",
        hsla: color2
      },
      {
        text: "会",
        hsla: color2
      },
      {
        text: "有",
        hsla: color2
      }
    ]
  },
  {
    lifeTime: 120,
    texts: [
      {
        text: "五",
        hsla: color2
      },
      {
        text: "年",
        hsla: color2
      },
      {
        text: "十",
        hsla: color2
      },
      {
        text: "年",
        hsla: color2
      }
    ]
  },
  {
    lifeTime: 80,
    texts: [
      {
        text: "我",
        hsla: color2
      },
      {
        text: "对",
        hsla: color2
      }
    ]
  },
  {
    lifeTime: 80,
    texts: [
      {
        text: "你",
        hsla: color2
      },
      {
        text: "的",
        hsla: color2
      },
      {
        text: "爱",
        hsla: color2
      }
    ]
  },
  {
    lifeTime: 120,
    texts: [
      {
        text: "一",
        hsla: color2
      },
      {
        text: "直",
        hsla: color2
      },
      {
        text: "不",
        hsla: color2
      },
      {
        text: "变",
        hsla: color2
      }
    ]
  },
  {
    lifeTime: 120,
    texts: [
      {
        text: "周",
        hsla: color3
      },
      {
        text: "年",
        hsla: color3
      },
      {
        text: "快",
        hsla: color3
      },
      {
        text: "乐",
        hsla: color3
      }
    ]
  },
  {
    lifeTime: 120,
    texts: [
      {
        text: "心",
        hsla: color3
      },
      {
        text: "心",
        hsla: color3
      },
      {
        text: "宝",
        hsla: color3
      }
    ]
  },
  {
    lifeTime: 180,
    texts: [
      {
        text: "I",
        hsla: color2
      },
      {
        text: " ❤️ ",
        hsla: color3
      },
      {
        text: "Y",
        hsla: color2
      },
      {
        text: "O",
        hsla: color2
      },
      {
        text: "U",
        hsla: color2
      }
    ]
  },
  {
    lifeTime: 80,
    texts: [
      {
        text: "F",
        hsla: color2
      },
      {
        text: "R",
        hsla: color2
      },
      {
        text: "O",
        hsla: color2
      },
      {
        text: "M",
        hsla: color2
      }
    ]
  },
  {
    lifeTime: 120,
    texts: [
      {
        text: "刀",
        hsla: color2
      },
      {
        text: "刀",
        hsla: color2
      }
    ]
  },
  {
    lifeTime: 150,
    func: (width, height) => {
      if (!points2.length) {
        const img = document.getElementById("tulip");
        const offscreenCanvas = document.createElement("canvas");
        const offscreenCanvasCtx = offscreenCanvas.getContext("2d");
        const imgWidth = 600;
        const imgHeight = 900;
        offscreenCanvas.setAttribute("width", imgWidth);
        offscreenCanvas.setAttribute("height", imgHeight);
        offscreenCanvasCtx.drawImage(img, 0, 0, imgWidth, imgHeight);
        let imgData = offscreenCanvasCtx.getImageData(
          0,
          0,
          imgWidth,
          imgHeight
        );
        for (let i = 0, max = imgData.width * imgData.height; i < max; i++) {
          if (imgData.data[i * 4 + 3]) {
            points2.push({
              x: (i % imgData.width) / imgData.width,
              y: i / imgData.width / imgData.height
            });
          }
        }
      }
      const p = points2[~~(Math.random() * points2.length)];
      const radius = Math.min(width * 0.8, height * 0.8);
      return {
        x: p.x * radius - radius / 2,
        y: (1 - p.y) * radius - radius / 2,
        z: ~~(Math.random() * 30),
        color: {
          h: 0,
          s: "100%",
          l: "60%",
          a: "80%"
        }
      };
    }
  }
];
