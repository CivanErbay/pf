<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

onMounted(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const toLanding = () => {
  router.push("/");
};
</script>

<template>
  <div class="impressum">
    <h4 class="font-rubik">Impressum</h4>
    <p>Angaben gemäß § 5 TMG</p>
    <p>Civan Erbay</p>
    <p>Körnerstr. 116</p>
    <p>50823 Köln</p>
    <h2>Kontakt</h2>
    <p>E-Mail: info@civan-erbay.de</p>
    <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
    <h2>EU-Streitschlichtung</h2>
    E-Mail: hello@cartel-design.com

    <p>
      Weitere Informationen finden Sie auf unseren Websites:
      <a href="https://cartel-design.com" target="_blank" rel="noopener noreferrer">Cartel Design - Professionelle
        Websites für Unternehmen</a> und
      <a href="https://mycoachsite.com" target="_blank" rel="noopener noreferrer">MyCoachSite - Coaching & Beratung Websites</a>.
    </p>
    <p>
      Die Europäische Kommission stellt eine Plattform zur
      Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr.
      Unsere E-Mail-Adresse finden Sie oben im Impressum.
    </p>
    <h2>Verbraucher­streit­beilegung/Universal­schlichtungs­stelle</h2>
    <p>
      Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor
      einer Verbraucherschlichtungsstelle teilzunehmen.
    </p>

    <h2>Haftung für Inhalte</h2>
    <p>
      Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf
      diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis
      10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
      übermittelte oder gespeicherte fremde Informationen zu überwachen oder
      nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
      hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
      Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
      Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis
      einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von
      entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
      entfernen.
    </p>

    <h2>Haftung für Links</h2>
    <p>
      Unser Angebot enthält Links zu externen Websites Dritter, auf deren
      Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
      Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
      Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
      verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung
      auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
      Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche
      Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte
      einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
      Rechtsverletzungen werden wir derartige Links umgehend entfernen.
    </p>

    <h2>Urheberrecht</h2>
    <p>
      Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
      Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
      Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen
      des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen
      Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den
      privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf
      dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
      Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
      gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung
      aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei
      Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend
      entfernen.
    </p>
  </div>
</template>

<style scoped>
.impressum {
  display: flex;
  flex-direction: column;
  margin: 50px 0 10px;
  width: 75%;
  overflow: scroll;
}

.impressum-back {
  border: 2px solid white;
  padding: 5px 15px;
  border-radius: 4px;
  cursor: pointer;
  width: fit-content;
  margin-top: 50px;
}

h4 {
  font-size: 20px;
  font-weight: bold;
  margin: 15px 0;
}

h2 {
  margin-top: 20px;
}

p {
  font-size: 12px;
}
</style>
