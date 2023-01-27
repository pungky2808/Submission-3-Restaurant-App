(()=>{"use strict";var n,r={756:(n,r,A)=>{A.d(r,{Z:()=>E});var e=A(537),o=A.n(e),t=A(645),i=A.n(t),a=A(667),d=A.n(a),l=new URL(A(789),A.b),s=i()(o());s.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Quicksand&display=swap);"]);var p=d()(l);s.push([n.id,'* {\n  box-sizing: border-box;\n}\n\n:root {\n  --primary-color: #fdf6ec;\n  --secondary-color: #557153;\n  --linear-gradiant: linear-gradient(\n    to right,\n    rgba(57, 106, 252, 0.5),\n    rgba(41, 72, 255, 0.2)\n  );\n}\n\nbody,\nhtml {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n}\n\nbody {\n  font-family: "Quicksand", sans-serif;\n  font-size: 12px;\n  background: var(--primary-color);\n  text-decoration: none;\n}\n\n/* Skip Link */\n\n.skip-link {\n  position: absolute;\n  top: -40px;\n  left: 0;\n  background-color: var(--primary-color);\n  color: var(--secondary-color);\n  padding: 8px;\n  z-index: 100;\n  text-decoration: none;\n  text-transform: uppercase;\n  font-weight: bolder;\n}\n\n.skip-link:focus {\n  top: 0;\n}\n\n/* Header */\n\n.header {\n  background: var(--secondary-color);\n  display: flex;\n  padding: 20px 30px;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.header_title {\n  margin: 0;\n  padding: 0.7rem;\n  color: var(--primary-color);\n  line-height: 24px;\n  font-size: 24px;\n}\n\n.header_menu {\n  display: none;\n  font-size: 32px;\n  margin: 10px;\n  width: 60px;\n  height: 50px;\n  cursor: pointer;\n  color: var(--primary-color);\n  background-color: var(--secondary-color);\n  text-decoration: none;\n  border: none;\n}\n\n/* Navigasi  */\n\n.nav a:hover {\n  padding: 0.7rem;\n  font-size: 1.3em;\n  border-radius: 10px;\n  color: var(--secondary-color);\n  background-color: var(--primary-color);\n}\n\n.nav_list {\n  padding: 0;\n  margin: 0;\n  width: 100%;\n}\n\n.nav_item {\n  display: inline-block;\n  box-sizing: border-box;\n  line-height: 24px;\n}\n\n.nav_item,\na,\nul {\n  text-decoration: none;\n  list-style: none;\n  color: var(--primary-color);\n}\n\n.nav_item a {\n  padding: 0.9rem;\n  font-size: 18px;\n}\n\n/* Jumbotron */\n\n.hero {\n  display: flex;\n  align-items: center;\n  min-height: 500px;\n  width: 100%;\n  text-align: center;\n  background-size: cover;\n  background-position: center;\n  background-blend-mode: multiply;\n  background-image: var(--linear-gradiant),\n    url('+p+');\n}\n\n.hero_inner {\n  margin: 0 auto;\n  padding: 0px 20px;\n  max-width: 800px;\n}\n\n.hero_title {\n  color: var(--primary-color);\n  font-weight: 800;\n  font-size: 50px;\n  margin: 0;\n}\n\n.hero_tagline {\n  color: var(--primary-color);\n  margin-top: 16px;\n  font-size: 24px;\n  font-weight: 800;\n}\n\n/** Main  */\n\nmain {\n  width: 100%;\n  margin: 0 auto;\n  padding: 30px;\n}\n\n/* Content */\n\nsection {\n  margin-bottom: 40px;\n}\n\n.main-resto-container {\n  border-top: 5px solid var(--secondary-color);\n}\n\n.main-resto_label {\n  margin: auto;\n  width: max-content;\n  font-size: 32px;\n  font-weight: bold;\n  margin-top: 0;\n  color: var(--secondary-color);\n  border-bottom: 3px solid var(--secondary-color);\n}\n\n.main-resto_label::after {\n  content: "";\n  margin-top: 16px;\n  display: block;\n}\n\n.list-resto {\n  margin: 32px auto auto;\n  text-align: left;\n  display: grid;\n  grid-gap: 16px;\n}\n\n.resto-item {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  width: 100%;\n  border-radius: 5px;\n  overflow: hidden;\n  position: relative;\n  top: 0;\n  transition: top ease 0.4s;\n  cursor: pointer;\n}\n\n.resto-item:hover {\n  top: -4px;\n  box-shadow: 0px 5px 5px 5px var(--secondary-color);\n}\n\n.resto-item_image {\n  object-fit: cover;\n  width: 100%;\n  height: 250px;\n  border-radius: 1em 1em 0 0;\n}\n\n.resto-item_city {\n  font-size: 16px;\n  text-transform: uppercase;\n  color: var(--secondary-color);\n  padding: 0 16px 0 16px;\n}\n\n.resto-item_rating {\n  color: var(--primary-color);\n  background-color: var(--secondary-color);\n  font-weight: 600;\n  text-decoration: none;\n  border: 2px solid #557153;\n  margin: 0 0 0 5px;\n  padding: 2px 3px 2px 3px;\n  border-radius: 5px;\n}\n\n.resto-item_name {\n  font-weight: bold;\n  font-size: 24px;\n  margin-top: 16px;\n  transition: 0.3s opacity;\n  padding: 0 16px 0 16px;\n}\n\n.resto-item_name:hover {\n  opacity: 0.5;\n}\n\n.resto-item_name {\n  text-decoration: none;\n  color: var(--secondary-color);\n  font-size: 24px;\n}\n\n.resto-item_desc {\n  margin-top: 16px;\n  font-size: 14px;\n  line-height: 1.5em;\n  color: black;\n  padding: 0 16px 0 16px;\n\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 7; /* number of lines to show */\n  -webkit-box-orient: vertical;\n}\n\n/** Footer  */\n\nfooter {\n  background-color: #7d8f69;\n  color: var(--primary-color);\n  padding: 2em;\n  width: 100%;\n  font-size: 16px;\n  text-align: center;\n}\n\nfooter ul {\n  margin: 0 auto;\n  padding: 0;\n  display: inline-block;\n}\n\nfooter li {\n  display: inline-block;\n  margin: 0 5px;\n}\n\nfooter a {\n  position: relative;\n  display: inline-block;\n  padding: 2em;\n  text-decoration: none;\n  color: var(--primary-color);\n  top: 0;\n  transition: 0.3s opacity;\n  box-sizing: border-box;\n  min-width: 44px;\n  min-height: 44px;\n}\n\nfooter a:hover {\n  opacity: 0.5;\n}\n\nfooter p {\n  margin-top: 10px;\n  color: var(--primary-color);\n}\n\n/* Detail Resto */\n#root {\n  padding-top: 65px;\n}\n\n.restaurant {\n  width: 100%;\n}\n\n.restaurant-detail__wrapper h4 {\n  margin: 0;\n}\n\n.restaurant-detail__rating {\n  margin-right: 15px;\n}\n\n.restaurant-detail__category {\n  border-radius: 15px;\n  font-size: 12px;\n  padding: 5px 20px;\n  color: white;\n  background-color: var(--decoration-color);\n}\n\n.restaurant-detail__thumbnail {\n  width: 100%;\n}\n\n.restaurant-detail__info,\n.restaurant-detail__menu-list,\n.restaurant-detail__review {\n  margin-bottom: 5px;\n}\n\n.restaurant-detail__foods,\n.restaurant-detail__drinks,\nli {\n  list-style: none;\n  margin: 0 0 10px;\n  padding: 1px;\n  color: var(--secondary-color);\n}\n\n/** RESTO ITEM */\n\n.restaurant-item {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  width: 100%;\n  border-radius: 5px;\n  overflow: hidden;\n  position: relative;\n  top: 0;\n  transition: top ease 0.4s;\n  cursor: pointer;\n}\n\n.restaurant-item:hover {\n  top: -4px;\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n}\n\n.restaurant-item__content {\n  padding: 16px;\n}\n\n.restaurant-item__thumbnail {\n  width: 100%;\n  height: 65%;\n  transition: transform ease 0.4s;\n}\n\n.restaurant-item__thumbnail:hover {\n  transform: scale(1.1);\n}\n\n.restaurant-item__city {\n  font-size: 14px;\n  text-transform: uppercase;\n  color: #999;\n}\n\n.restaurant-item__rating {\n  color: var(--decoration-color);\n  font-weight: 600;\n  text-decoration: none;\n}\n\n.restaurant-item__name {\n  font-weight: 700;\n  font-size: 18px;\n  margin-top: 16px;\n  transition: 0.3s opacity;\n}\n\n.restaurant-item__name:hover {\n  opacity: 0.5;\n}\n\n.restaurant-item__name {\n  text-decoration: none;\n  color: var(--primary-background);\n}\n\n.restaurant-item__description {\n  margin-top: 16px;\n  font-size: 12px;\n  line-height: 1.5em;\n}\n\n/* DETAIL */\n.detail {\n  display: grid;\n  grid-gap: 1.545em;\n  font-size: 1em;\n  margin-top: 1em;\n}\n\n.detail-img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center;\n}\n\n.detail-name-address-rating {\n  display: inline-block;\n  margin: 0;\n}\n\n.icon-primary {\n  color: black;\n}\n\n.detail-desc {\n  text-align: justify;\n  color: var(--secondary-color);\n  margin-bottom: 0.5em;\n  margin: 0;\n}\n\n.category {\n  padding: 0.3em 1em;\n  color: var(--primary-color);\n  background-color: var(--secondary-color);\n  margin-right: 2px;\n  border: 1px solid transparent;\n  border-radius: 5px 5px 5px 5px;\n  text-align: left;\n  height: 50px;\n}\n\n.detail-info {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  padding-left: 0;\n  margin-bottom: 0;\n}\n\n.detail-info h4 {\n  color: var(--secondary-color);\n  font-size: 1.5em;\n  margin: 0;\n  text-align: left;\n  padding-left: 0.5em;\n}\n\n.detail-info li {\n  position: relative;\n  display: block;\n  padding: 0.6em;\n  color: var(--secondary-color);\n  text-decoration: none;\n  background-color: var(--primary-color);\n}\n\n.resto-name,\n.resto-address,\n.resto-rating,\n.resto-category {\n  font-size: 1.5em;\n  margin: 0;\n  height: 50px;\n  text-align: left;\n}\n\n/*explore restaurant label */\n.main-resto_container {\n  width: 100%;\n  margin: 60px auto;\n  padding: 0 3%;\n  text-align: center;\n}\n\n.explore-restaurant__label {\n  font-size: 32px;\n  font-weight: bold;\n  text-align: center;\n  color: var(--secondary-color);\n}\n\n.explore-restaurant__label::after {\n  content: "";\n  margin-top: 16px;\n  display: block;\n  border-bottom: 3px solid var(--secondary-color);\n}\n\n#explore-restaurant-list {\n  display: grid;\n  grid-row-gap: 1.5em;\n  padding-top: 1.5em;\n}\n\n/*\n  Like\n*/\n.like {\n  width: 55px;\n  height: 55px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--secondary-color);\n\n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  border-radius: 50%;\n  border: 0;\n\n  font-size: 18px;\n  color: white;\n  cursor: pointer;\n}\n\n.content-title,\n#resto-detail-about-us-title,\n#resto-detail-review-title,\n#resto-detail-form-review-title {\n  color: var(--secondary-color);\n  text-align: center;\n  margin: 40px 10px;\n  border-bottom: 3px solid var(--secondary-color);\n  line-height: 0.1em;\n}\n\n.content-title span,\n#resto-detail-about-us-title span,\n#resto-detail-review-title span,\n#resto-detail-form-review-title span {\n  background: var(--primary-color);\n  padding: 0 10px;\n}\n\n/* FORM */\nform {\n  margin: 2em 0;\n  padding: 1.5em;\n  border: 3px solid var(--secondary-color);\n  border-radius: 15px;\n}\n\n.form-control {\n  display: block;\n  width: 100%;\n  height: 60px;\n  padding: 0.738em;\n  font-size: 1.37em;\n  color: var(--secondary-color);\n  background-color: var(--primary-color);\n  border: 1px solid var(--secondary-color);\n  border-radius: 1em;\n}\n\n.form-label {\n  display: block;\n  font-size: 1.3em;\n  margin-bottom: 0.5em;\n  text-align: left;\n  color: var(--secondary-color);\n}\n\n.mb-3 {\n  margin-bottom: 1.3em;\n  margin-top: 0.5em;\n}\n\n.btn {\n  display: block;\n  width: 100px;\n  height: 50px;\n  padding: 0.7em;\n  font-size: 1.37em;\n  color: var(--primary-color);\n  background-color: var(--secondary-color);\n  border: 2px solid var(--secondary-color);\n  border-radius: 1em;\n}\n\n.btn:hover {\n  box-shadow: 0px 10px 13px -7px var(--secondary-color),\n    5px 5px 15px 5px var(--secondary-color);\n}\n\n/* Detail Review */\n.detail-review {\n  max-width: 100%;\n  font-size: 1em;\n  text-align: center;\n}\n\n.detail-review-item {\n  color: var(--secondary-color);\n  background-color: var(--primary-color);\n  margin-bottom: 1.5em;\n  padding: 1em 1em;\n  border: 1px solid var(--secondary-color);\n  border-radius: 2em;\n}\n\n.detail-review-item:last-child {\n  margin-bottom: 0;\n}\n\n.header-review {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.5em;\n  color: var(--secondary-color);\n  border-bottom: 1px solid var(--secondary-color);\n}\n\n.name-review {\n  font-weight: bold;\n  display: flex;\n  font-size: 1.5em;\n  margin: 0;\n}\n\n.date-review {\n  font-size: 1em;\n  font-weight: lighter;\n  font-size: 1em;\n}\n\n.body-review {\n  padding: 1em;\n  text-align: left;\n  font-size: 1.37em;\n}\n\n.category:hover,\n.detail-food li:hover,\n.detail-drink li:hover,\n.detail-review-item:hover {\n  box-shadow: 0px 10px 13px -7px var(--secondary-color),\n    5px 5px 15px 5px var(--secondary-color);\n}\n',"",{version:3,sources:["webpack://./src/styles/main.css"],names:[],mappings:"AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,wBAAwB;EACxB,0BAA0B;EAC1B;;;;GAIC;AACH;;AAEA;;EAEE,SAAS;EACT,UAAU;EACV,WAAW;EACX,YAAY;AACd;;AAEA;EACE,oCAAoC;EACpC,eAAe;EACf,gCAAgC;EAChC,qBAAqB;AACvB;;AAEA,cAAc;;AAEd;EACE,kBAAkB;EAClB,UAAU;EACV,OAAO;EACP,sCAAsC;EACtC,6BAA6B;EAC7B,YAAY;EACZ,YAAY;EACZ,qBAAqB;EACrB,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,MAAM;AACR;;AAEA,WAAW;;AAEX;EACE,kCAAkC;EAClC,aAAa;EACb,kBAAkB;EAClB,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,SAAS;EACT,eAAe;EACf,2BAA2B;EAC3B,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,YAAY;EACZ,WAAW;EACX,YAAY;EACZ,eAAe;EACf,2BAA2B;EAC3B,wCAAwC;EACxC,qBAAqB;EACrB,YAAY;AACd;;AAEA,cAAc;;AAEd;EACE,eAAe;EACf,gBAAgB;EAChB,mBAAmB;EACnB,6BAA6B;EAC7B,sCAAsC;AACxC;;AAEA;EACE,UAAU;EACV,SAAS;EACT,WAAW;AACb;;AAEA;EACE,qBAAqB;EACrB,sBAAsB;EACtB,iBAAiB;AACnB;;AAEA;;;EAGE,qBAAqB;EACrB,gBAAgB;EAChB,2BAA2B;AAC7B;;AAEA;EACE,eAAe;EACf,eAAe;AACjB;;AAEA,cAAc;;AAEd;EACE,aAAa;EACb,mBAAmB;EACnB,iBAAiB;EACjB,WAAW;EACX,kBAAkB;EAClB,sBAAsB;EACtB,2BAA2B;EAC3B,+BAA+B;EAC/B;2CACsD;AACxD;;AAEA;EACE,cAAc;EACd,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,2BAA2B;EAC3B,gBAAgB;EAChB,eAAe;EACf,SAAS;AACX;;AAEA;EACE,2BAA2B;EAC3B,gBAAgB;EAChB,eAAe;EACf,gBAAgB;AAClB;;AAEA,WAAW;;AAEX;EACE,WAAW;EACX,cAAc;EACd,aAAa;AACf;;AAEA,YAAY;;AAEZ;EACE,mBAAmB;AACrB;;AAEA;EACE,4CAA4C;AAC9C;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,aAAa;EACb,6BAA6B;EAC7B,+CAA+C;AACjD;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,sBAAsB;EACtB,gBAAgB;EAChB,aAAa;EACb,cAAc;AAChB;;AAEA;EACE,0CAA0C;EAC1C,WAAW;EACX,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;EAClB,MAAM;EACN,yBAAyB;EACzB,eAAe;AACjB;;AAEA;EACE,SAAS;EACT,kDAAkD;AACpD;;AAEA;EACE,iBAAiB;EACjB,WAAW;EACX,aAAa;EACb,0BAA0B;AAC5B;;AAEA;EACE,eAAe;EACf,yBAAyB;EACzB,6BAA6B;EAC7B,sBAAsB;AACxB;;AAEA;EACE,2BAA2B;EAC3B,wCAAwC;EACxC,gBAAgB;EAChB,qBAAqB;EACrB,yBAAyB;EACzB,iBAAiB;EACjB,wBAAwB;EACxB,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,gBAAgB;EAChB,wBAAwB;EACxB,sBAAsB;AACxB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,qBAAqB;EACrB,6BAA6B;EAC7B,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,kBAAkB;EAClB,YAAY;EACZ,sBAAsB;;EAEtB,gBAAgB;EAChB,uBAAuB;EACvB,oBAAoB;EACpB,qBAAqB,EAAE,4BAA4B;EACnD,4BAA4B;AAC9B;;AAEA,aAAa;;AAEb;EACE,yBAAyB;EACzB,2BAA2B;EAC3B,YAAY;EACZ,WAAW;EACX,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,UAAU;EACV,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;EACrB,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,YAAY;EACZ,qBAAqB;EACrB,2BAA2B;EAC3B,MAAM;EACN,wBAAwB;EACxB,sBAAsB;EACtB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,2BAA2B;AAC7B;;AAEA,iBAAiB;AACjB;EACE,iBAAiB;AACnB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,eAAe;EACf,iBAAiB;EACjB,YAAY;EACZ,yCAAyC;AAC3C;;AAEA;EACE,WAAW;AACb;;AAEA;;;EAGE,kBAAkB;AACpB;;AAEA;;;EAGE,gBAAgB;EAChB,gBAAgB;EAChB,YAAY;EACZ,6BAA6B;AAC/B;;AAEA,gBAAgB;;AAEhB;EACE,0CAA0C;EAC1C,WAAW;EACX,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;EAClB,MAAM;EACN,yBAAyB;EACzB,eAAe;AACjB;;AAEA;EACE,SAAS;EACT,2CAA2C;AAC7C;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;EACX,WAAW;EACX,+BAA+B;AACjC;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,eAAe;EACf,yBAAyB;EACzB,WAAW;AACb;;AAEA;EACE,8BAA8B;EAC9B,gBAAgB;EAChB,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,gBAAgB;EAChB,wBAAwB;AAC1B;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,qBAAqB;EACrB,gCAAgC;AAClC;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,kBAAkB;AACpB;;AAEA,WAAW;AACX;EACE,aAAa;EACb,iBAAiB;EACjB,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,uBAAuB;AACzB;;AAEA;EACE,qBAAqB;EACrB,SAAS;AACX;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,mBAAmB;EACnB,6BAA6B;EAC7B,oBAAoB;EACpB,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,2BAA2B;EAC3B,wCAAwC;EACxC,iBAAiB;EACjB,6BAA6B;EAC7B,8BAA8B;EAC9B,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,6BAA6B;EAC7B,gBAAgB;EAChB,SAAS;EACT,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,cAAc;EACd,cAAc;EACd,6BAA6B;EAC7B,qBAAqB;EACrB,sCAAsC;AACxC;;AAEA;;;;EAIE,gBAAgB;EAChB,SAAS;EACT,YAAY;EACZ,gBAAgB;AAClB;;AAEA,4BAA4B;AAC5B;EACE,WAAW;EACX,iBAAiB;EACjB,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,6BAA6B;AAC/B;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,cAAc;EACd,+CAA+C;AACjD;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;;CAEC;AACD;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,wCAAwC;;EAExC,eAAe;EACf,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,SAAS;;EAET,eAAe;EACf,YAAY;EACZ,eAAe;AACjB;;AAEA;;;;EAIE,6BAA6B;EAC7B,kBAAkB;EAClB,iBAAiB;EACjB,+CAA+C;EAC/C,kBAAkB;AACpB;;AAEA;;;;EAIE,gCAAgC;EAChC,eAAe;AACjB;;AAEA,SAAS;AACT;EACE,aAAa;EACb,cAAc;EACd,wCAAwC;EACxC,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,iBAAiB;EACjB,6BAA6B;EAC7B,sCAAsC;EACtC,wCAAwC;EACxC,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,gBAAgB;EAChB,oBAAoB;EACpB,gBAAgB;EAChB,6BAA6B;AAC/B;;AAEA;EACE,oBAAoB;EACpB,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,YAAY;EACZ,YAAY;EACZ,cAAc;EACd,iBAAiB;EACjB,2BAA2B;EAC3B,wCAAwC;EACxC,wCAAwC;EACxC,kBAAkB;AACpB;;AAEA;EACE;2CACyC;AAC3C;;AAEA,kBAAkB;AAClB;EACE,eAAe;EACf,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,6BAA6B;EAC7B,sCAAsC;EACtC,oBAAoB;EACpB,gBAAgB;EAChB,wCAAwC;EACxC,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,cAAc;EACd,6BAA6B;EAC7B,+CAA+C;AACjD;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,gBAAgB;EAChB,SAAS;AACX;;AAEA;EACE,cAAc;EACd,oBAAoB;EACpB,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;;;;EAIE;2CACyC;AAC3C",sourcesContent:['@import url("https://fonts.googleapis.com/css2?family=Quicksand&display=swap");\n\n* {\n  box-sizing: border-box;\n}\n\n:root {\n  --primary-color: #fdf6ec;\n  --secondary-color: #557153;\n  --linear-gradiant: linear-gradient(\n    to right,\n    rgba(57, 106, 252, 0.5),\n    rgba(41, 72, 255, 0.2)\n  );\n}\n\nbody,\nhtml {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n}\n\nbody {\n  font-family: "Quicksand", sans-serif;\n  font-size: 12px;\n  background: var(--primary-color);\n  text-decoration: none;\n}\n\n/* Skip Link */\n\n.skip-link {\n  position: absolute;\n  top: -40px;\n  left: 0;\n  background-color: var(--primary-color);\n  color: var(--secondary-color);\n  padding: 8px;\n  z-index: 100;\n  text-decoration: none;\n  text-transform: uppercase;\n  font-weight: bolder;\n}\n\n.skip-link:focus {\n  top: 0;\n}\n\n/* Header */\n\n.header {\n  background: var(--secondary-color);\n  display: flex;\n  padding: 20px 30px;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.header_title {\n  margin: 0;\n  padding: 0.7rem;\n  color: var(--primary-color);\n  line-height: 24px;\n  font-size: 24px;\n}\n\n.header_menu {\n  display: none;\n  font-size: 32px;\n  margin: 10px;\n  width: 60px;\n  height: 50px;\n  cursor: pointer;\n  color: var(--primary-color);\n  background-color: var(--secondary-color);\n  text-decoration: none;\n  border: none;\n}\n\n/* Navigasi  */\n\n.nav a:hover {\n  padding: 0.7rem;\n  font-size: 1.3em;\n  border-radius: 10px;\n  color: var(--secondary-color);\n  background-color: var(--primary-color);\n}\n\n.nav_list {\n  padding: 0;\n  margin: 0;\n  width: 100%;\n}\n\n.nav_item {\n  display: inline-block;\n  box-sizing: border-box;\n  line-height: 24px;\n}\n\n.nav_item,\na,\nul {\n  text-decoration: none;\n  list-style: none;\n  color: var(--primary-color);\n}\n\n.nav_item a {\n  padding: 0.9rem;\n  font-size: 18px;\n}\n\n/* Jumbotron */\n\n.hero {\n  display: flex;\n  align-items: center;\n  min-height: 500px;\n  width: 100%;\n  text-align: center;\n  background-size: cover;\n  background-position: center;\n  background-blend-mode: multiply;\n  background-image: var(--linear-gradiant),\n    url("../public/images/sharp/hero-image_4-large.jpg");\n}\n\n.hero_inner {\n  margin: 0 auto;\n  padding: 0px 20px;\n  max-width: 800px;\n}\n\n.hero_title {\n  color: var(--primary-color);\n  font-weight: 800;\n  font-size: 50px;\n  margin: 0;\n}\n\n.hero_tagline {\n  color: var(--primary-color);\n  margin-top: 16px;\n  font-size: 24px;\n  font-weight: 800;\n}\n\n/** Main  */\n\nmain {\n  width: 100%;\n  margin: 0 auto;\n  padding: 30px;\n}\n\n/* Content */\n\nsection {\n  margin-bottom: 40px;\n}\n\n.main-resto-container {\n  border-top: 5px solid var(--secondary-color);\n}\n\n.main-resto_label {\n  margin: auto;\n  width: max-content;\n  font-size: 32px;\n  font-weight: bold;\n  margin-top: 0;\n  color: var(--secondary-color);\n  border-bottom: 3px solid var(--secondary-color);\n}\n\n.main-resto_label::after {\n  content: "";\n  margin-top: 16px;\n  display: block;\n}\n\n.list-resto {\n  margin: 32px auto auto;\n  text-align: left;\n  display: grid;\n  grid-gap: 16px;\n}\n\n.resto-item {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  width: 100%;\n  border-radius: 5px;\n  overflow: hidden;\n  position: relative;\n  top: 0;\n  transition: top ease 0.4s;\n  cursor: pointer;\n}\n\n.resto-item:hover {\n  top: -4px;\n  box-shadow: 0px 5px 5px 5px var(--secondary-color);\n}\n\n.resto-item_image {\n  object-fit: cover;\n  width: 100%;\n  height: 250px;\n  border-radius: 1em 1em 0 0;\n}\n\n.resto-item_city {\n  font-size: 16px;\n  text-transform: uppercase;\n  color: var(--secondary-color);\n  padding: 0 16px 0 16px;\n}\n\n.resto-item_rating {\n  color: var(--primary-color);\n  background-color: var(--secondary-color);\n  font-weight: 600;\n  text-decoration: none;\n  border: 2px solid #557153;\n  margin: 0 0 0 5px;\n  padding: 2px 3px 2px 3px;\n  border-radius: 5px;\n}\n\n.resto-item_name {\n  font-weight: bold;\n  font-size: 24px;\n  margin-top: 16px;\n  transition: 0.3s opacity;\n  padding: 0 16px 0 16px;\n}\n\n.resto-item_name:hover {\n  opacity: 0.5;\n}\n\n.resto-item_name {\n  text-decoration: none;\n  color: var(--secondary-color);\n  font-size: 24px;\n}\n\n.resto-item_desc {\n  margin-top: 16px;\n  font-size: 14px;\n  line-height: 1.5em;\n  color: black;\n  padding: 0 16px 0 16px;\n\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 7; /* number of lines to show */\n  -webkit-box-orient: vertical;\n}\n\n/** Footer  */\n\nfooter {\n  background-color: #7d8f69;\n  color: var(--primary-color);\n  padding: 2em;\n  width: 100%;\n  font-size: 16px;\n  text-align: center;\n}\n\nfooter ul {\n  margin: 0 auto;\n  padding: 0;\n  display: inline-block;\n}\n\nfooter li {\n  display: inline-block;\n  margin: 0 5px;\n}\n\nfooter a {\n  position: relative;\n  display: inline-block;\n  padding: 2em;\n  text-decoration: none;\n  color: var(--primary-color);\n  top: 0;\n  transition: 0.3s opacity;\n  box-sizing: border-box;\n  min-width: 44px;\n  min-height: 44px;\n}\n\nfooter a:hover {\n  opacity: 0.5;\n}\n\nfooter p {\n  margin-top: 10px;\n  color: var(--primary-color);\n}\n\n/* Detail Resto */\n#root {\n  padding-top: 65px;\n}\n\n.restaurant {\n  width: 100%;\n}\n\n.restaurant-detail__wrapper h4 {\n  margin: 0;\n}\n\n.restaurant-detail__rating {\n  margin-right: 15px;\n}\n\n.restaurant-detail__category {\n  border-radius: 15px;\n  font-size: 12px;\n  padding: 5px 20px;\n  color: white;\n  background-color: var(--decoration-color);\n}\n\n.restaurant-detail__thumbnail {\n  width: 100%;\n}\n\n.restaurant-detail__info,\n.restaurant-detail__menu-list,\n.restaurant-detail__review {\n  margin-bottom: 5px;\n}\n\n.restaurant-detail__foods,\n.restaurant-detail__drinks,\nli {\n  list-style: none;\n  margin: 0 0 10px;\n  padding: 1px;\n  color: var(--secondary-color);\n}\n\n/** RESTO ITEM */\n\n.restaurant-item {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  width: 100%;\n  border-radius: 5px;\n  overflow: hidden;\n  position: relative;\n  top: 0;\n  transition: top ease 0.4s;\n  cursor: pointer;\n}\n\n.restaurant-item:hover {\n  top: -4px;\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n}\n\n.restaurant-item__content {\n  padding: 16px;\n}\n\n.restaurant-item__thumbnail {\n  width: 100%;\n  height: 65%;\n  transition: transform ease 0.4s;\n}\n\n.restaurant-item__thumbnail:hover {\n  transform: scale(1.1);\n}\n\n.restaurant-item__city {\n  font-size: 14px;\n  text-transform: uppercase;\n  color: #999;\n}\n\n.restaurant-item__rating {\n  color: var(--decoration-color);\n  font-weight: 600;\n  text-decoration: none;\n}\n\n.restaurant-item__name {\n  font-weight: 700;\n  font-size: 18px;\n  margin-top: 16px;\n  transition: 0.3s opacity;\n}\n\n.restaurant-item__name:hover {\n  opacity: 0.5;\n}\n\n.restaurant-item__name {\n  text-decoration: none;\n  color: var(--primary-background);\n}\n\n.restaurant-item__description {\n  margin-top: 16px;\n  font-size: 12px;\n  line-height: 1.5em;\n}\n\n/* DETAIL */\n.detail {\n  display: grid;\n  grid-gap: 1.545em;\n  font-size: 1em;\n  margin-top: 1em;\n}\n\n.detail-img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center;\n}\n\n.detail-name-address-rating {\n  display: inline-block;\n  margin: 0;\n}\n\n.icon-primary {\n  color: black;\n}\n\n.detail-desc {\n  text-align: justify;\n  color: var(--secondary-color);\n  margin-bottom: 0.5em;\n  margin: 0;\n}\n\n.category {\n  padding: 0.3em 1em;\n  color: var(--primary-color);\n  background-color: var(--secondary-color);\n  margin-right: 2px;\n  border: 1px solid transparent;\n  border-radius: 5px 5px 5px 5px;\n  text-align: left;\n  height: 50px;\n}\n\n.detail-info {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  padding-left: 0;\n  margin-bottom: 0;\n}\n\n.detail-info h4 {\n  color: var(--secondary-color);\n  font-size: 1.5em;\n  margin: 0;\n  text-align: left;\n  padding-left: 0.5em;\n}\n\n.detail-info li {\n  position: relative;\n  display: block;\n  padding: 0.6em;\n  color: var(--secondary-color);\n  text-decoration: none;\n  background-color: var(--primary-color);\n}\n\n.resto-name,\n.resto-address,\n.resto-rating,\n.resto-category {\n  font-size: 1.5em;\n  margin: 0;\n  height: 50px;\n  text-align: left;\n}\n\n/*explore restaurant label */\n.main-resto_container {\n  width: 100%;\n  margin: 60px auto;\n  padding: 0 3%;\n  text-align: center;\n}\n\n.explore-restaurant__label {\n  font-size: 32px;\n  font-weight: bold;\n  text-align: center;\n  color: var(--secondary-color);\n}\n\n.explore-restaurant__label::after {\n  content: "";\n  margin-top: 16px;\n  display: block;\n  border-bottom: 3px solid var(--secondary-color);\n}\n\n#explore-restaurant-list {\n  display: grid;\n  grid-row-gap: 1.5em;\n  padding-top: 1.5em;\n}\n\n/*\n  Like\n*/\n.like {\n  width: 55px;\n  height: 55px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--secondary-color);\n\n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  border-radius: 50%;\n  border: 0;\n\n  font-size: 18px;\n  color: white;\n  cursor: pointer;\n}\n\n.content-title,\n#resto-detail-about-us-title,\n#resto-detail-review-title,\n#resto-detail-form-review-title {\n  color: var(--secondary-color);\n  text-align: center;\n  margin: 40px 10px;\n  border-bottom: 3px solid var(--secondary-color);\n  line-height: 0.1em;\n}\n\n.content-title span,\n#resto-detail-about-us-title span,\n#resto-detail-review-title span,\n#resto-detail-form-review-title span {\n  background: var(--primary-color);\n  padding: 0 10px;\n}\n\n/* FORM */\nform {\n  margin: 2em 0;\n  padding: 1.5em;\n  border: 3px solid var(--secondary-color);\n  border-radius: 15px;\n}\n\n.form-control {\n  display: block;\n  width: 100%;\n  height: 60px;\n  padding: 0.738em;\n  font-size: 1.37em;\n  color: var(--secondary-color);\n  background-color: var(--primary-color);\n  border: 1px solid var(--secondary-color);\n  border-radius: 1em;\n}\n\n.form-label {\n  display: block;\n  font-size: 1.3em;\n  margin-bottom: 0.5em;\n  text-align: left;\n  color: var(--secondary-color);\n}\n\n.mb-3 {\n  margin-bottom: 1.3em;\n  margin-top: 0.5em;\n}\n\n.btn {\n  display: block;\n  width: 100px;\n  height: 50px;\n  padding: 0.7em;\n  font-size: 1.37em;\n  color: var(--primary-color);\n  background-color: var(--secondary-color);\n  border: 2px solid var(--secondary-color);\n  border-radius: 1em;\n}\n\n.btn:hover {\n  box-shadow: 0px 10px 13px -7px var(--secondary-color),\n    5px 5px 15px 5px var(--secondary-color);\n}\n\n/* Detail Review */\n.detail-review {\n  max-width: 100%;\n  font-size: 1em;\n  text-align: center;\n}\n\n.detail-review-item {\n  color: var(--secondary-color);\n  background-color: var(--primary-color);\n  margin-bottom: 1.5em;\n  padding: 1em 1em;\n  border: 1px solid var(--secondary-color);\n  border-radius: 2em;\n}\n\n.detail-review-item:last-child {\n  margin-bottom: 0;\n}\n\n.header-review {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.5em;\n  color: var(--secondary-color);\n  border-bottom: 1px solid var(--secondary-color);\n}\n\n.name-review {\n  font-weight: bold;\n  display: flex;\n  font-size: 1.5em;\n  margin: 0;\n}\n\n.date-review {\n  font-size: 1em;\n  font-weight: lighter;\n  font-size: 1em;\n}\n\n.body-review {\n  padding: 1em;\n  text-align: left;\n  font-size: 1.37em;\n}\n\n.category:hover,\n.detail-food li:hover,\n.detail-drink li:hover,\n.detail-review-item:hover {\n  box-shadow: 0px 10px 13px -7px var(--secondary-color),\n    5px 5px 15px 5px var(--secondary-color);\n}\n'],sourceRoot:""}]);const E=s},948:(n,r,A)=>{A.d(r,{Z:()=>E});var e=A(537),o=A.n(e),t=A(645),i=A.n(t),a=A(667),d=A.n(a),l=new URL(A(709),A.b),s=i()(o()),p=d()(l);s.push([n.id,"@media screen and (max-width: 499px) {\r\n  .nav {\r\n    position: absolute;\r\n    z-index: 10;\r\n    width: 250px;\r\n    top: 70px;\r\n    left: 0;\r\n    transform: translate(-300px, 0);\r\n    transition: transform 0.3s ease;\r\n    background-color: #557153;\r\n    -webkit-transform: translate(-300px, 0);\r\n  }\r\n\r\n  .open {\r\n    background: #557153;\r\n    transform: translate(0, 0);\r\n    -webkit-transform: translate(0, 0);\r\n  }\r\n\r\n  .nav_item {\r\n    display: list-item;\r\n    width: 100%;\r\n    text-align: left;\r\n    padding: 1.5em;\r\n    border-bottom: 1px solid #e0e0e0;\r\n  }\r\n\r\n  .header_menu {\r\n    display: block;\r\n  }\r\n\r\n  .hero_title: {\r\n    font-size: 24px;\r\n  }\r\n\r\n  footer a {\r\n    padding: 5px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 500px) {\r\n  #nav {\r\n    font-size: none;\r\n  }\r\n\r\n  section {\r\n    margin-bottom: 80px;\r\n  }\r\n\r\n  .main-resto_label {\r\n    font-size: 26px;\r\n  }\r\n\r\n  .list-resto {\r\n    grid-template-columns: 1fr 1fr;\r\n  }\r\n\r\n  .resto-item_name {\r\n    font-size: 22px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .hero {\r\n    background-image: var(--linear-gradiant),\r\n      url("+p+");\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 648px) {\r\n  .hero_title {\r\n    font-size: 40px;\r\n  }\r\n\r\n  .hero_tagline {\r\n    font-size: 24px;\r\n  }\r\n\r\n  .resto-item_desc {\r\n    font-size: 13px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 960px) {\r\n  .container-info {\r\n    display: grid;\r\n    grid-template-columns: 1.5fr 1fr;\r\n    grid-gap: 1.5em;\r\n    margin-top: 1em;\r\n  }\r\n\r\n  main {\r\n    padding: 30px 80px;\r\n  }\r\n\r\n  .header {\r\n    padding: 20px 80px;\r\n  }\r\n\r\n  .hero_inner {\r\n    max-width: 85%;\r\n  }\r\n\r\n  .hero_title {\r\n    font-size: 40px;\r\n  }\r\n\r\n  .hero_tagline {\r\n    font-size: 22px;\r\n  }\r\n\r\n  section {\r\n    margin-bottom: 80px;\r\n  }\r\n\r\n  .list-resto {\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    grid-gap: 24px;\r\n  }\r\n\r\n  .resto-item_name {\r\n    font-size: 22px;\r\n  }\r\n\r\n  .resto-item_desc {\r\n    font-size: 14px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1200px) {\r\n  .list-resto {\r\n    grid-template-columns: 1fr 1fr 1fr 1fr;\r\n    grid-gap: 24px;\r\n  }\r\n\r\n  main {\r\n    padding: 30px 100px;\r\n  }\r\n\r\n  .header {\r\n    padding: 20px 100px;\r\n  }\r\n\r\n  .hero {\r\n    height: 90vh;\r\n    min-width: 1000px;\r\n  }\r\n\r\n  .hero_inner {\r\n    max-width: 800px;\r\n  }\r\n\r\n  .hero_title {\r\n    font-size: 50px;\r\n  }\r\n\r\n  .hero_tagline {\r\n    margin-top: 22px;\r\n    font-size: 24px;\r\n  }\r\n}\r\n","",{version:3,sources:["webpack://./src/styles/responsive.css"],names:[],mappings:"AAAA;EACE;IACE,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,SAAS;IACT,OAAO;IACP,+BAA+B;IAC/B,+BAA+B;IAC/B,yBAAyB;IACzB,uCAAuC;EACzC;;EAEA;IACE,mBAAmB;IACnB,0BAA0B;IAC1B,kCAAkC;EACpC;;EAEA;IACE,kBAAkB;IAClB,WAAW;IACX,gBAAgB;IAChB,cAAc;IACd,gCAAgC;EAClC;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,YAAY;EACd;AACF;;AAEA;EACE;IACE,eAAe;EACjB;;EAEA;IACE,mBAAmB;EACrB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,8BAA8B;EAChC;;EAEA;IACE,eAAe;EACjB;AACF;;AAEA;EACE;IACE;6CACsD;EACxD;AACF;;AAEA;EACE;IACE,eAAe;EACjB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,eAAe;EACjB;AACF;;AAEA;EACE;IACE,aAAa;IACb,gCAAgC;IAChC,eAAe;IACf,eAAe;EACjB;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,mBAAmB;EACrB;;EAEA;IACE,kCAAkC;IAClC,cAAc;EAChB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,eAAe;EACjB;AACF;;AAEA;EACE;IACE,sCAAsC;IACtC,cAAc;EAChB;;EAEA;IACE,mBAAmB;EACrB;;EAEA;IACE,mBAAmB;EACrB;;EAEA;IACE,YAAY;IACZ,iBAAiB;EACnB;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,gBAAgB;IAChB,eAAe;EACjB;AACF",sourcesContent:['@media screen and (max-width: 499px) {\r\n  .nav {\r\n    position: absolute;\r\n    z-index: 10;\r\n    width: 250px;\r\n    top: 70px;\r\n    left: 0;\r\n    transform: translate(-300px, 0);\r\n    transition: transform 0.3s ease;\r\n    background-color: #557153;\r\n    -webkit-transform: translate(-300px, 0);\r\n  }\r\n\r\n  .open {\r\n    background: #557153;\r\n    transform: translate(0, 0);\r\n    -webkit-transform: translate(0, 0);\r\n  }\r\n\r\n  .nav_item {\r\n    display: list-item;\r\n    width: 100%;\r\n    text-align: left;\r\n    padding: 1.5em;\r\n    border-bottom: 1px solid #e0e0e0;\r\n  }\r\n\r\n  .header_menu {\r\n    display: block;\r\n  }\r\n\r\n  .hero_title: {\r\n    font-size: 24px;\r\n  }\r\n\r\n  footer a {\r\n    padding: 5px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 500px) {\r\n  #nav {\r\n    font-size: none;\r\n  }\r\n\r\n  section {\r\n    margin-bottom: 80px;\r\n  }\r\n\r\n  .main-resto_label {\r\n    font-size: 26px;\r\n  }\r\n\r\n  .list-resto {\r\n    grid-template-columns: 1fr 1fr;\r\n  }\r\n\r\n  .resto-item_name {\r\n    font-size: 22px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .hero {\r\n    background-image: var(--linear-gradiant),\r\n      url("../public/images/sharp/hero-image_4-small.jpg");\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 648px) {\r\n  .hero_title {\r\n    font-size: 40px;\r\n  }\r\n\r\n  .hero_tagline {\r\n    font-size: 24px;\r\n  }\r\n\r\n  .resto-item_desc {\r\n    font-size: 13px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 960px) {\r\n  .container-info {\r\n    display: grid;\r\n    grid-template-columns: 1.5fr 1fr;\r\n    grid-gap: 1.5em;\r\n    margin-top: 1em;\r\n  }\r\n\r\n  main {\r\n    padding: 30px 80px;\r\n  }\r\n\r\n  .header {\r\n    padding: 20px 80px;\r\n  }\r\n\r\n  .hero_inner {\r\n    max-width: 85%;\r\n  }\r\n\r\n  .hero_title {\r\n    font-size: 40px;\r\n  }\r\n\r\n  .hero_tagline {\r\n    font-size: 22px;\r\n  }\r\n\r\n  section {\r\n    margin-bottom: 80px;\r\n  }\r\n\r\n  .list-resto {\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    grid-gap: 24px;\r\n  }\r\n\r\n  .resto-item_name {\r\n    font-size: 22px;\r\n  }\r\n\r\n  .resto-item_desc {\r\n    font-size: 14px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1200px) {\r\n  .list-resto {\r\n    grid-template-columns: 1fr 1fr 1fr 1fr;\r\n    grid-gap: 24px;\r\n  }\r\n\r\n  main {\r\n    padding: 30px 100px;\r\n  }\r\n\r\n  .header {\r\n    padding: 20px 100px;\r\n  }\r\n\r\n  .hero {\r\n    height: 90vh;\r\n    min-width: 1000px;\r\n  }\r\n\r\n  .hero_inner {\r\n    max-width: 800px;\r\n  }\r\n\r\n  .hero_title {\r\n    font-size: 50px;\r\n  }\r\n\r\n  .hero_tagline {\r\n    margin-top: 22px;\r\n    font-size: 24px;\r\n  }\r\n}\r\n'],sourceRoot:""}]);const E=s},46:(n,r,A)=>{var e=A(379),o=A.n(e),t=A(795),i=A.n(t),a=A(569),d=A.n(a),l=A(565),s=A.n(l),p=A(216),E=A.n(p),c=A(589),C=A.n(c),B=A(756),m={};m.styleTagTransform=C(),m.setAttributes=s(),m.insert=d().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=E(),o()(B.Z,m),B.Z&&B.Z.locals&&B.Z.locals},362:(n,r,A)=>{var e=A(379),o=A.n(e),t=A(795),i=A.n(t),a=A(569),d=A.n(a),l=A(565),s=A.n(l),p=A(216),E=A.n(p),c=A(589),C=A.n(c),B=A(948),m={};m.styleTagTransform=C(),m.setAttributes=s(),m.insert=d().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=E(),o()(B.Z,m),B.Z&&B.Z.locals&&B.Z.locals}},A={};function e(n){var o=A[n];if(void 0!==o)return o.exports;var t=A[n]={id:n,exports:{}};return r[n](t,t.exports,e),t.exports}e.m=r,n=[],e.O=(r,A,o,t)=>{if(!A){var i=1/0;for(s=0;s<n.length;s++){for(var[A,o,t]=n[s],a=!0,d=0;d<A.length;d++)(!1&t||i>=t)&&Object.keys(e.O).every((n=>e.O[n](A[d])))?A.splice(d--,1):(a=!1,t<i&&(i=t));if(a){n.splice(s--,1);var l=o();void 0!==l&&(r=l)}}return r}t=t||0;for(var s=n.length;s>0&&n[s-1][2]>t;s--)n[s]=n[s-1];n[s]=[A,o,t]},e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var A in r)e.o(r,A)&&!e.o(n,A)&&Object.defineProperty(n,A,{enumerable:!0,get:r[A]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var r=e.g.document;if(!n&&r&&(r.currentScript&&(n=r.currentScript.src),!n)){var A=r.getElementsByTagName("script");A.length&&(n=A[A.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),(()=>{e.b=document.baseURI||self.location.href;var n={954:0};e.O.j=r=>0===n[r];var r=(r,A)=>{var o,t,[i,a,d]=A,l=0;if(i.some((r=>0!==n[r]))){for(o in a)e.o(a,o)&&(e.m[o]=a[o]);if(d)var s=d(e)}for(r&&r(A);l<i.length;l++)t=i[l],e.o(n,t)&&n[t]&&n[t][0](),n[t]=0;return e.O(s)},A=self.webpackChunkrestaurant_apps=self.webpackChunkrestaurant_apps||[];A.forEach(r.bind(null,0)),A.push=r.bind(null,A.push.bind(A))})(),e.nc=void 0;var o=e.O(void 0,[578,193,337,268],(()=>e(253)));o=e.O(o)})();
//# sourceMappingURL=app~d1658f4b.bundle.js.map