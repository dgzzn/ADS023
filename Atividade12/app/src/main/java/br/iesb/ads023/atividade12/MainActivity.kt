package br.iesb.ads023.atividade12

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        setTitle("Main")

        val botao = findViewById<View>(R.id.button) as Button
        val texto = findViewById<View>(R.id.editText) as EditText

        botao.setOnClickListener {
            val intencao = Intent(this@MainActivity, ChildActivity::class.java)
            intencao.putExtra("msg", texto.getText().toString());
            startActivity(intencao)
        }
    }
}
