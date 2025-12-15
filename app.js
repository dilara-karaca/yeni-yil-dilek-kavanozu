const ALL_WISHES = [
    "Yeni yıl size sağlık getirsin.",
    "Yeni yılda yüzünüz hep gülsün.",
    "Hayallerinizin gerçekleştiği bir yıl olsun.",
    "Yeni yıl huzurla gelsin.",
    "Sevdiklerinizle dolu bir yıl yaşayın.",
    "Yeni yılda şansınız bol olsun.",
    "Kalbinizin hafiflediği bir yıl olsun.",
    "Yeni yıl size mutluluk getirsin.",
    "Emeklerinizin karşılığını aldığınız bir yıl olsun.",
    "Yeni yılda umutlarınız artsın.",
    "Yeni yıl başarılarla dolu olsun.",
    "Kendinizle gurur duyacağınız bir yıl olsun.",
    "Yeni yılda güzel sürprizler sizi bulsun.",
    "İç huzurunuzun arttığı bir yıl olsun.",
    "Yeni yılda dilekleriniz kabul olsun.",
    "Sağlıkla geçen bir yılınız olsun.",
    "Yeni yıl size yeni başlangıçlar getirsin.",
    "Mutlu anılarınızın çoğaldığı bir yıl olsun.",
    "Yeni yılda kalbiniz ferahlasın.",
    "Hayatınızın kolaylaştığı bir yıl olsun.",
    "Yeni yıl sizi yormasın, güçlendirsin.",
    "2026'da gülümsemeleriniz eksik olmasın.",
    "Sevgi dolu bir yıl olsun.",
    "İçini ısıtan anlarla dolu bir yıl olsun.",
    "Yeni yıl size cesaret versin.",
    "Hedeflerinize yaklaştığınız bir yıl olsun.",
    "Yeni yılda kalbiniz kırılmasın.",
    "Kendiniz için iyi bir yıl olsun.",
    "Yeni yıl size iyi gelsin.",
    "Hayatınız daha sade ve huzurlu olsun.",
    "Yeni yılda yollarınız açık olsun.",
    "Gönlünüzden geçenler yolunuzu bulsun.",
    "Yeni yıl size bol enerji getirsin.",
    "Kendinize zaman ayırdığınız bir yıl olsun.",
    "Yeni yılda yükleriniz hafiflesin.",
    "Mutluluğu küçük şeylerde bulduğunuz bir yıl olsun.",
    "Yeni yıl size ilham versin.",
    "Kalbiniz hep umutla dolu olsun.",
    "Yeni yılda güzel tesadüfler yaşayın.",
    "2026'da hayatınıza iyi insanlar girsin.",
    "Yeni yıl size huzur versin.",
    "Kendinizle barıştığınız bir yıl olsun.",
    "Yeni yılda hayal kurmaktan vazgeçmeyin.",
    "Gönlünün rahat olduğu bir yıl olsun.",
    "Yeni yıl size güç versin.",
    "İyi ki dediğiniz anlar çoğalsın.",
    "Yeni yılda yüzünüz daha çok gülsün.",
    "Kalbinizin sesini dinlediğiniz bir yıl olsun.",
    "Yeni yıl size umut getirsin.",
    "Hayatınıza güzellikler eklensin.",
    "Yeni yılda korkularınız azalsın.",
    "Kendinize daha nazik olduğunuz bir yıl olsun.",
    "Yeni yıl size dinginlik versin.",
    "Sevdiklerinizle sağlıklı bir yıl olsun.",
    "Yeni yılda kalbiniz ferah olsun.",
    "Güzel başlangıçlarla dolu bir yıl olsun.",
    "Yeni yıl size şifa olsun.",
    "İç huzurunuz artsın.",
    "Yeni yılda daha çok gülün.",
    "Hayalleriniz için cesur olun.",
    "Yeni yıl size bolluk getirsin.",
    "Kendinize inancınız artsın.",
    "Yeni yılda güzel yollar açılsın.",
    "Umudunuzu kaybetmediğiniz bir yıl olsun.",
    "Yeni yıl size iyi anılar biriktirsin.",
    "Hayatın ritmini bulduğunuz bir yıl olsun.",
    "Yeni yılda kalbiniz yorulmasın.",
    "Mutluluğun arttığı bir yıl olsun.",
    "Yeni yıl size yeni fırsatlar sunsun.",
    "Kendinizi keşfettiğiniz bir yıl olsun.",
    "Yeni yılda yüzünüz hep aydınlık olsun.",
    "Hayatınız daha dengeli olsun.",
    "Yeni yıl size sıcaklık getirsin.",
    "Sevgiyi daha çok hissettiğiniz bir yıl olsun.",
    "Yeni yılda güzel kapılar açılsın.",
    "Kendiniz için doğru kararlar aldığınız bir yıl olsun.",
    "Yeni yıl size güven versin.",
    "İçinizdeki ışık sönmesin.",
    "Yeni yılda kalbiniz hafiflesin.",
    "Hayatınıza huzur yerleşsin.",
    "Yeni yıl size neşe getirsin.",
    "Kendinizle gurur duyduğunuz bir yıl olsun.",
    "Yeni yılda umut hep sizinle olsun.",
    "Güzellikleri fark ettiğiniz bir yıl olsun.",
    "Yeni yıl size iyi insanlar getirsin.",
    "Kalbiniz sevgiyle dolsun.",
    "Yeni yılda yüzünüz gülsün.",
    "Hayat size nazik davransın.",
    "Yeni yıl size sabır versin.",
    "Hayatın sadeleştiği bir yıl olsun.",
    "Kendinize iyi baktığınız bir yıl olsun.",
    "Yeni yıl size iç huzuru getirsin.",
    "Hayatın kolay aktığı bir yıl olsun.",
    "Yeni yılda kalbiniz hep sıcak olsun.",
    "Mutlu olduğunuz anlar çoğalsın.",
    "Yeni yıl size iyi hissettirsin.",
    "Dileklerinizin yeşerdiği bir yıl olsun.",
    "2026 size taptaze bir sayfa açsın.",
    "Yeni yetenekler keşfettiğiniz bir yıl olsun.",
    "Yeni yıl, size uğur getirsin.",
    "Şans, her adımında sizinle olsun.",
    "Negatif enerji bu yıl sizden uzak kalsın.",
    "Evrene gönderdiğiniz her iyi niyet, size geri dönsün.",
    "Gönlünün zenginliği, cebine yansısın.",
    "İçinizdeki huzur, yıl boyu rehberiniz olsun.",
    "Hayatın renkleri bu yıl daha parlak olsun.",
    "Her günün, minnettar olacağınız küçük mucizelerle dolsun.",
    "Yeni yıl, size yenilmez bir irade versin.",
    "Amacınıza ulaşmak için gerekli azim bu yıl sizinle olsun.",
    "Her gün, öğrenilecek yeni bir ders getirsin.",
    "Yıl boyunca dinç ve enerjik olun.",
    "Kendinize iyi bakmak, bu yılın önceliğiniz olsun.",
    "Yeni yılda zihniniz berrak, ruhunuz dingin olsun.",
    "Yeni yıl, size tam bir iyilik hali hediye etsin.",
    "Kalbinizden geçen tüm iyilikler size geri dönsün.",
    "Paylaşmanın mutluluğu yıl boyunca sizinle olsun.",
    "Neşeniz, attığınız her adımda sizinle olsun.",
    "Gülümsemeniz, yılın en parlak ışığı olsun.",
    "Zorluklar, bu yıl sizi teğet geçsin.",
    "Bu yıl, en iyi versiyonunuz ortaya çıksın.",
    "Zamanınız, sevdiklerinizle dolu olsun.",
    "Yılın her günü kıymetli olsun.",
    "Geçmişin bilgeliği, geleceğinize yön versin.",
    "Kendinle barışık bir yıl sizi bekliyor.",
    "Öz sevginiz, bu yıl en güçlü kalkanınız olsun.",
    "Yaratıcılığınız size beklenmedik kapılar açsın.",
    "Işığınız, başkalarına da yol göstersin.",
    "2026, 'Mucize' dolu bir yıl olsun.",
    "Bu yılın mottosu ‘Başarı’ olsun.",
    "Yeni yıl, kariyerinizde zirveye çıkışınız olsun.",
    "Öğrenme tutkunuz bu yıl sizi ileriye taşısın.",
    "Sınavlarınızda ve projelerinizde üstün başarı sizinle olsun.",
    "Yeni yıl, bilgeliğinizi artırsın.",
    "Bu yıl öğrendiğiniz her şey, hayatınıza değer katsın.",
    "Bu yıl, sizin için yaratıcı çözümlerin yılı olsun.",
    "Emeğiniz, her zaman görünür olsun.",
    "Bu yıl, aldığınız her karar sizi doğru zamana götürsün.",
    "Hayatın ritmi bu yıl sizinle uyum içinde aksın.",
    "Cesaretiniz, ertelediğiniz adımlar için itici gücünüz olsun.",
    "2026, beklemediğiniz anda gelen güzelliklerle hatırlansın.",
    "Yıl boyunca iç sesiniz size doğru yolu fısıldasın.",
    "2026, kendiniz için sağlam temeller attığınız bir yıl olsun."
];

const wishCardEl = document.getElementById("wishCard");
const metaEl = document.getElementById("meta");
const drawBtn = document.getElementById("drawBtn");
const resetBtn = document.getElementById("resetBtn");

const jarEl = document.getElementById("jar");
const envelopeEl = document.getElementById("envelope");

const overlayEl = document.getElementById("overlay");
const paperTextEl = document.getElementById("paperText");
const paperCloseEl = document.getElementById("paperClose");

let remaining = [];
let animating = false;
let currentWish = "";
let typingTimer = null;

function typeWish(text, { speed = 22, startDelay = 150 } = {}) {
    if (typingTimer) clearTimeout(typingTimer);

    paperTextEl.classList.add("typing");
    paperTextEl.textContent = "";

    let i = 0;

    const tick = () => {
        paperTextEl.textContent = text.slice(0, i);
        i++;

        if (i <= text.length) {
            typingTimer = setTimeout(tick, speed);
        } else {
            paperTextEl.classList.remove("typing");
            typingTimer = null;
        }
    };

    typingTimer = setTimeout(tick, startDelay);
}

function stopTyping() {
    if (typingTimer) clearTimeout(typingTimer);
    typingTimer = null;
    paperTextEl.classList.remove("typing");
}

function refill() {
    remaining = [...ALL_WISHES];
    wishCardEl.textContent = "Kart çek ve zarfı aç.";
    metaEl.textContent = `Kalan kart: ${remaining.length}`;
}

function resetUI() {
    jarEl.classList.remove(
        "jar--shake",
        "jar--lid-open",
        "jar--envelope-show",
        "jar--envelope-zoom",
        "jar--envelope-ready",
        "jar--envelope-open"
    );

    overlayEl.classList.remove("overlay--show");
    overlayEl.setAttribute("aria-hidden", "true");

    drawBtn.disabled = false;
    resetBtn.disabled = false;

    animating = false;
    currentWish = "";
}

function pickWish() {
    const i = Math.floor(Math.random() * remaining.length);
    return remaining.splice(i, 1)[0];
}

function startDrawFlow() {
    if (animating) return;

    if (!remaining.length) {
        wishCardEl.textContent = "Kavanoz boş. Sıfırla ile yeniden doldur.";
        metaEl.textContent = "";
        return;
    }

    animating = true;
    drawBtn.disabled = true;
    resetBtn.disabled = true;

    currentWish = pickWish();

    jarEl.classList.remove(
        "jar--shake",
        "jar--lid-open",
        "jar--envelope-show",
        "jar--envelope-zoom",
        "jar--envelope-ready",
        "jar--envelope-open"
    );
    void jarEl.offsetWidth;

    // Sallanma
    jarEl.classList.add("jar--shake");
    wishCardEl.textContent = "Kavanoz sallanıyor...";

    // Kapak yarım aç
    setTimeout(() => {
        jarEl.classList.add("jar--lid-open");
    }, 600);

    // Zarf çık
    setTimeout(() => {
        jarEl.classList.add("jar--envelope-show");
        wishCardEl.textContent = "Zarf geliyor...";
    }, 900);

    // Zarf ekrana yaklaşsın
    setTimeout(() => {
        jarEl.classList.add("jar--envelope-zoom");
    }, 1200);

    // Zarf tıklanabilir + gösterge
    setTimeout(() => {
        jarEl.classList.add("jar--envelope-ready");
        wishCardEl.textContent = "Zarfı açmak için tıkla.";
        animating = false;
    }, 1450);
}

/* 2) Zarf tıkla: zarf kapağı açılır -> kağıt açılır */
function openEnvelope() {
    if (animating) return;
    if (!jarEl.classList.contains("jar--envelope-ready")) return;

    animating = true;
    jarEl.classList.add("jar--envelope-open");
    wishCardEl.textContent = "Açılıyor...";

    setTimeout(() => {
        // Dileği animasyonlu yazdır
        overlayEl.classList.add("overlay--show");
        overlayEl.setAttribute("aria-hidden", "false");
        stopTyping();
        typeWish(currentWish, { speed: 22, startDelay: 120 });

        // kalan sayıyı güncelle
        metaEl.textContent = `Kalan kart: ${remaining.length}`;

        animating = false;
    }, 380);
}

function closePaper() {
    if (animating) return;
    animating = true;

    stopTyping();

    overlayEl.classList.remove("overlay--show");
    overlayEl.setAttribute("aria-hidden", "true");

    jarEl.classList.remove(
        "jar--envelope-open",
        "jar--envelope-ready",
        "jar--envelope-zoom",
        "jar--envelope-show",
        "jar--lid-open"
    );

    drawBtn.disabled = false;
    resetBtn.disabled = false;
    wishCardEl.textContent = "İstersen bir kart daha çekebilirsin.";

    setTimeout(() => {
        animating = false;
    }, 250);
}

function resetAll() {
    if (animating) return;
    stopTyping();
    resetUI();
    refill();
}

drawBtn.addEventListener("click", startDrawFlow);
envelopeEl.addEventListener("click", openEnvelope);

paperCloseEl.addEventListener("click", closePaper);
overlayEl.addEventListener("click", (e) => {
    if (e.target === overlayEl) closePaper();
});

resetBtn.addEventListener("click", resetAll);

refill();
const backdrop = document.getElementById("backdrop");

let scrollYBeforeLock = 0;

function lockScroll() {
    scrollYBeforeLock = window.scrollY || 0;
    document.body.classList.add("is-locked");

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollYBeforeLock}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
}

function unlockScroll() {
    document.body.classList.remove("is-locked");

    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    document.body.style.width = "";

    window.scrollTo(0, scrollYBeforeLock);
}

function openModalEffects() {
    backdrop.hidden = false;
    lockScroll();
}

function closeModalEffects() {
    backdrop.hidden = true;
    unlockScroll();
}

backdrop.addEventListener("click", () => {
    closeModalEffects();
});
