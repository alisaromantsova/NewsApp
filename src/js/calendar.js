import {
  fetchPopularNews,
  fetchNewsByCategory,
  fetchNewsBySearch,
  renderEmptyMarkup,
  fetchNewsByCategoryAndDate,
} from './fetches';
import categoryValue from './navigation';
import { renderMarkup } from './render-markup';
import CalendarDates from 'calendar-dates';
const calendarDates = new CalendarDates();
class Calendar {
  ref = {
    calendar: document.querySelector('.calendar2'),
    searchInfo: document.querySelector('.calendar2__search-info'),
    yearForward: document.querySelector('.calendar2__month-year-button-right'),
    currentDate: document.querySelector('.calendar2__current-date'),
    calendarCurrentDateBefore: document.querySelector(
      '.calendar2__current-date-before'
    ),
    calendarCurrentDateAfter: document.querySelector(
      '.calendar2__current-date-after'
    ),
    calendarCurrentDateSvgUp: document.querySelector(
      '.calendar2__current-date-svg-up'
    ),
    calendarCurrentDateSvgDown: document.querySelector(
      '.calendar2__current-date-svg-down'
    ),
    calendarContainer: document.querySelector('.calendar2__container'),
    monthYearInfo: document.querySelector('.calendar2__month-year'),
    calendarButtonLeft: document.querySelector(`.calendar2__button-left`),
    calendarButtonRight: document.querySelector(`.calendar2__button-right`),
    calendarDates: document.querySelector('.calendar2__dates'),
    rootElement: document.querySelector('.observer'),
  };
  #calendarArrayDates = [];
  #calendarArrayHTML = [];
  #calendarArray = [];
  #currentDate = {
    date: new Date().getDate(),
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
    chosen: new Date().getDate(),
  };
  #months = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December',
  };
  #getHTMLMonthYearInfo() {
    this.ref.monthYearInfo.textContent = `${
      this.#months[Number(this.#currentDate.month)]
    } ${this.#currentDate.year}`;
  }

  #getHTMLCurrentDateInfo() {
    this.ref.currentDate.textContent = `${this.#currentDate.year}/${
      this.#currentDate.month
    }/${this.#currentDate.date}`;
  }

  #getHTMLCalendarDates(dates) {
    return dates.map(item => {
      //this.#calendarArray.push(item);
      if (this.#currentDate.date == item.date && item.type == 'current') {
        return `<li class='date ${item.type}-month current-date' data-date='${item.type}'>${item.date}</li>`;
      }
      return `<li class='date ${item.type}-month' data-date='${item.type}'>${item.date}</li>`;
    });
  }

  async futureDate(date = new Date()) {
    this.#getHTMLMonthYearInfo();
    this.#getHTMLCurrentDateInfo();

    for (const meta of await calendarDates.getDates(date)) {
      this.#calendarArrayDates.push(meta);
    }
    for (const meta of await calendarDates.getMatrix(date)) {
      if (meta.some(item => item.type === 'current')) {
        this.#calendarArray = [...this.#calendarArray, ...meta];
      }
      this.#calendarArray = [...this.#calendarArray];
    }
    //======================
    const monthLength = this.#calendarArray.filter(
      item => item.type == 'current'
    ).length;
    if (this.#calendarArray[0].type !== 'current') {
      this.#calendarArray = this.#adoptCalendarForNotCurrentFirstDay(
        this.#calendarArray,
        monthLength
      );
      this.#calendarArrayHTML = this.#getHTMLCalendarDates(this.#calendarArray);
    }
    if (this.#calendarArray[0].type == 'current') {
      this.#calendarArray = this.#adoptCalendarForCurrentFirstDay(
        this.#calendarArray,
        monthLength
      );
      this.#calendarArrayHTML = this.#getHTMLCalendarDates(this.#calendarArray);
    }
    const element = this.#calendarArrayHTML.join('');
    this.ref.calendarDates.innerHTML = element;
  }
  activateListeners() {
    this.ref.calendarDates.addEventListener(
      'click',
      this.#calendarContainerOnClick.bind(this)
    );
    this.ref.calendarButtonRight.addEventListener(
      'click',
      this.#buttonMonthAfterOnClick.bind(this)
    );
    this.ref.calendarButtonLeft.addEventListener(
      'click',
      this.#buttonMonthBeforeOnClick.bind(this)
    );
    this.ref.currentDate.addEventListener(
      'click',
      this.#currentDateOnClick.bind(this)
    );
    this.ref.yearForward.addEventListener(
      'click',
      this.#yearForwardOnClick.bind(this)
    );
  }

  #adoptCalendarForCurrentFirstDay(calendarData, monthLength) {
    const indexStartDate = this.#calendarArrayDates.findIndex(
      element => element.iso == calendarData[0].iso
    );
    const previousSixDays = this.#calendarArrayDates.slice(
      indexStartDate - 6,
      6
    );
    calendarData = [...previousSixDays, ...calendarData];
    if (monthLength >= 30) {
      calendarData.length = 42;
      return calendarData;
    }
    calendarData.length = 35;
    return calendarData;
  }

  #adoptCalendarForNotCurrentFirstDay(calendarData, monthLength) {
    calendarData.splice(0, 1);
    const lastDate = calendarData[calendarData.length - 1];
    const index = this.#calendarArrayDates.findIndex(
      element => element.iso === lastDate.iso
    );

    calendarData.push(this.#calendarArrayDates[index + 1]);
    calendarData.length = 35;
    return calendarData;
  }

  #currentDateOnClick() {
    this.ref.calendarContainer.classList.toggle('js-calendar-show');
    this.ref.currentDate.classList.add('js-date-show');
    this.ref.calendarCurrentDateBefore.classList.add(
      'calendar2__current-date-before--active'
    );
    this.ref.calendarCurrentDateAfter.classList.add(
      'calendar2__current-date-after--active'
    );
    this.ref.calendarCurrentDateSvgDown.classList.toggle('visually-hidden');
    this.ref.calendarCurrentDateSvgUp.classList.toggle('visually-hidden');
  }

  #calendarContainerOnClick(event) {
    if (event.target.dataset.date !== 'current') return;
    const currentDate = event.target.textContent;
    //console.log(currentDate);
    //save current date for future
    const fullFormatCurrentDate = this.#calendarArray.filter(
      item => item.type === 'current' && item.date == currentDate
    );
    const fullDateArray = fullFormatCurrentDate[0].iso.split('-');
    this.#currentDate.date = fullDateArray[2];
    this.#currentDate.month = fullDateArray[1];
    this.#currentDate.year = fullDateArray[0];
    this.#deleteAndAddCurrentClass(event.target);
    this.#getHTMLCurrentDateInfo();
    this.ref.calendarContainer.classList.remove('js-calendar-show');
    this.ref.calendarCurrentDateSvgDown.classList.remove('visually-hidden');
    this.ref.calendarCurrentDateSvgUp.classList.add('visually-hidden');

    // const dateForFetch = fullFormatCurrentDate[0].iso.split('-').join('');
    // if (categoryValue) {
    //   this.#renderNews(dateForFetch, categoryValue);
    // }
  }

  async #renderNews(date, category) {
    const result = await fetchNewsByCategoryAndDate(date, category);
    const div = document.querySelector('.news');
    div.innerHTML = '';
    renderMarkup(result);
  }

  #deleteAndAddCurrentClass(element) {
    const refPreviousDate = document.querySelector('.current-date');
    if (refPreviousDate) {
      refPreviousDate.classList.toggle('current-date');
    }
    element.classList.toggle('current-date');
  }
  #buttonMonthAfterOnClick(event) {
    let chosenDate = '';
    if (this.#currentDate.month == 12) {
      this.#currentDate.month = 1;
      this.#currentDate.year = Number(this.#currentDate.year) + 1;
      chosenDate = `${this.#currentDate.year}/${this.#currentDate.month}/${
        this.#currentDate.date
      }`;
    } else {
      this.#currentDate.month = Number(this.#currentDate.month) + 1;
      chosenDate = `${this.#currentDate.year}/${this.#currentDate.month}/${
        this.#currentDate.date
      }`;
    }
    this.#calendarArray = [];
    this.#calendarArrayHTML = [];
    this.#calendarArrayDates = [];

    this.futureDate(new Date(chosenDate));
  }

  #buttonMonthBeforeOnClick(event) {
    let chosenDate = '';
    if (this.#currentDate.month == 1) {
      this.#currentDate.month = 12;
      this.#currentDate.year = Number(this.#currentDate.year) - 1;
      chosenDate = `${this.#currentDate.year}/${this.#currentDate.month}/${
        this.#currentDate.date
      }`;
    } else {
      this.#currentDate.month -= 1;
      chosenDate = `${this.#currentDate.year}/${this.#currentDate.month}/${
        this.#currentDate.date
      }`;
    }
    this.#calendarArray = [];
    this.#calendarArrayHTML = [];
    this.#calendarArrayDates = [];

    this.futureDate(new Date(chosenDate));
  }
  #yearForwardOnClick(event) {
    let chosenDate = '';
    this.#currentDate.year = Number(this.#currentDate.year) + 1;
    chosenDate = `${this.#currentDate.year}/${this.#currentDate.month}/${
      this.#currentDate.date
    }`;
    this.#calendarArray = [];
    this.#calendarArrayHTML = [];
    this.#calendarArrayDates = [];

    this.futureDate(new Date(chosenDate));
  }
}

const calendar = new Calendar();
calendar.futureDate();
calendar.activateListeners();
